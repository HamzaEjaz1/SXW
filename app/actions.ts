"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  mailto?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message" | "project", string>>;
};

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  message: "",
};

const PROJECTS = [
  "Development construction",
  "Stand-alone project",
  "Carpentry and joinery",
  "Fire door installation",
] as const;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function mailtoFor(fields: {
  name: string;
  company: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}) {
  const subject = `Website enquiry — ${fields.project || "Carpentry"}`;
  const lines = [
    `Name: ${fields.name}`,
    fields.company ? `Company: ${fields.company}` : "",
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Project: ${fields.project}`,
    "",
    fields.message,
  ].filter(Boolean);
  return `mailto:sxwcarpentry@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (clean(formData.get("company_website"))) {
    return {
      status: "success",
      message: "Thank you. Your enquiry has been received.",
    };
  }

  const name = clean(formData.get("name")).slice(0, 80);
  const company = clean(formData.get("company")).slice(0, 80);
  const email = clean(formData.get("email")).slice(0, 120);
  const phone = clean(formData.get("phone")).slice(0, 30);
  const project = clean(formData.get("project"));
  const message = clean(formData.get("message")).slice(0, 4000);
  const fields = { name, company, email, phone, project, message };

  const errors: NonNullable<EnquiryState["errors"]> = {};
  if (name.length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) errors.phone = "Enter a phone number we can call.";
  if (!PROJECTS.includes(project as (typeof PROJECTS)[number])) errors.project = "Choose the type of work.";
  if (message.length < 10) errors.message = "Tell us a little about the work.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      errors,
    };
  }

  const mailto = mailtoFor(fields);

  try {
    const response = await fetch("https://formsubmit.co/ajax/sxwcarpentry@outlook.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        phone,
        project,
        message,
        _subject: `Website enquiry — ${project}`,
        _template: "table",
        _replyto: email,
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "We could not send that from the website. Open your email app and it will go straight to the team.",
        mailto,
      };
    }

    return {
      status: "success",
      message: "Thank you. Your enquiry is with SXW Carpentry Ltd. If you would rather talk now, call 07834 454106.",
    };
  } catch {
    return {
      status: "error",
      message: "We could not send that from the website. Open your email app and it will go straight to the team.",
      mailto,
    };
  }
}
