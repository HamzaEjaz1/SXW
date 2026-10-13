export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  minutes: number;
  image: string;
  imageAlt: string;
  blocks: GuideBlock[];
};

export const guides: Guide[] = [
  {
    slug: "before-you-call",
    title: "What to have ready before you call us",
    description:
      "A short note from the team in Devizes on the details that help us understand a carpentry package, whether it sits on a development or stands on its own.",
    category: "Working with us",
    minutes: 4,
    image: "/images/carpentry-2.jpg",
    imageAlt: "A circular saw cutting a length of softwood on a workbench",
    blocks: [
      {
        type: "p",
        text: "You do not need a perfect brief. A phone call or a short email is enough to start. What helps us is a clear picture of the job, so we are not guessing when we come back to you.",
      },
      {
        type: "h2",
        text: "Tell us which kind of job it is",
      },
      {
        type: "p",
        text: "Most of our work is development construction across the Southwest of England. We also take on stand-alone carpentry projects. Say which one you are calling about. If fire door installation is part of the package, say that too. We are accredited for that work through BlueSky, and we can certify the fire doors we install without bringing in a third party.",
      },
      {
        type: "h2",
        text: "The details that save a second conversation",
      },
      {
        type: "ul",
        items: [
          "Where the work is, and whether it is in the Southwest.",
          "Whether this is a development package or a stand-alone carpentry job.",
          "The carpentry and joinery you need, in plain words.",
          "Whether fire doors are included.",
          "A name, a phone number, and an email we can actually reach.",
        ],
      },
      {
        type: "p",
        text: "If you have drawings, send them. If you do not, describe the work as you would to someone standing on the site with you. We would rather have an honest description than a polished one.",
      },
      {
        type: "h2",
        text: "How we reply",
      },
      {
        type: "p",
        text: "Call 07834 454106 or email sxwcarpentry@outlook.com. If you use the form on this site, the note comes to the same inbox. We read it, then we come back by phone or email. We will not ask you to repeat the whole job if the first note already covers the points above.",
      },
    ],
  },
  {
    slug: "fire-doors",
    title: "Fire doors, and what our accreditation changes",
    description:
      "How SXW Carpentry Ltd installs fire doors under BlueSky accreditation, and why that means we can certify the doors we fit without a third party.",
    category: "Fire doors",
    minutes: 5,
    image: "/images/carpentry-3.jpg",
    imageAlt: "Gloved hands cutting a timber beam with a handsaw",
    blocks: [
      {
        type: "p",
        text: "On a lot of sites, fire door installation and fire door certification are two separate conversations, with a third company in the middle. That is not how we work.",
      },
      {
        type: "p",
        text: "SXW Carpentry Ltd is accredited for fire door installation through BlueSky. Because of that accreditation, we can certify the fire doors we install. You do not have to bring in a third party for the doors we have fitted.",
      },
      {
        type: "h2",
        text: "What that means on site",
      },
      {
        type: "p",
        text: "The same team that fits the door can stand behind the certification of that installation. For a site manager, that usually means one fewer handover, one fewer waiting period, and a clearer line of responsibility. The door, the fitting, and the certification stay with us.",
      },
      {
        type: "h2",
        text: "When to mention it",
      },
      {
        type: "p",
        text: "Mention fire doors at the start, even if they are only part of a wider carpentry package. Development work is still the core of the business. Fire door installation sits inside that, not off to one side. If the doors are the whole enquiry, say so. We would rather know the scope before we talk programme.",
      },
      {
        type: "ul",
        items: [
          "Tell us how many doors, if you know.",
          "Say whether they sit inside a larger carpentry package.",
          "Ask us about certification while we are still talking about the install, not after the doors are hung.",
        ],
      },
      {
        type: "p",
        text: "If you want the accreditation in writing before you instruct us, look at the BlueSky section on this site, or ask and we will talk you through it.",
      },
    ],
  },
  {
    slug: "development-carpentry",
    title: "Carpentry on a development, from our side of the fence",
    description:
      "How we approach carpentry and joinery on development sites across the Southwest, and the standard we are used to being measured against.",
    category: "Developments",
    minutes: 5,
    image: "/images/carpentry-1.jpg",
    imageAlt: "Timber roof structure under construction, with rafters and trusses in place",
    blocks: [
      {
        type: "p",
        text: "Development construction is the work we were built around. Since 2015 we have been based in Devizes, out on sites across the Southwest, fitting carpentry and joinery into programmes that already have a lot of moving parts.",
      },
      {
        type: "p",
        text: "We are known for attention to detail. That is not a slogan we picked up later. It is the reason site teams keep the conversation going: the work has to be right enough to hand over, not just right enough to leave the plot.",
      },
      {
        type: "h2",
        text: "The standard we work to",
      },
      {
        type: "p",
        text: "In 2023 NHBC recognised the company with three awards: Pride in Job, Seal of Excellence, and Quality. In 2024 there was a further NHBC Quality award. We mention that because it is the public measure of the standard we are used to. It does not replace a proper brief, and it does not mean every plot is the same. It does mean we already know what “good” looks like when someone independent is looking.",
      },
      {
        type: "h2",
        text: "How a package usually starts",
      },
      {
        type: "ul",
        items: [
          "You call or email, and say it is a development package.",
          "We talk through the carpentry and joinery, including fire doors if they are in the scope.",
          "We carry out the work with the same care we are known for in the trade.",
          "Where fire doors are ours to install, we can certify them under our BlueSky accreditation.",
        ],
      },
      {
        type: "p",
        text: "If you are comparing contractors, ask us about the package, the doors, and the standard. We would rather have that conversation early than tidy it up at handover.",
      },
    ],
  },
  {
    slug: "stand-alone-projects",
    title: "When the carpentry is not part of a development",
    description:
      "We also take on stand-alone carpentry projects. Here is how those enquiries differ from a site package, and how to start one.",
    category: "Stand-alone work",
    minutes: 4,
    image: "/images/carpentry-2.jpg",
    imageAlt: "Close view of timber being cut on a bench",
    blocks: [
      {
        type: "p",
        text: "Development sites are the bulk of the diary. They are not the whole diary. If you have a carpentry project that stands on its own, we will look at it. The craft is the same. The conversation is just quieter: one job, one brief, one point of contact.",
      },
      {
        type: "h2",
        text: "What we need from you",
      },
      {
        type: "p",
        text: "Tell us what you want made, fitted, or put right, and where it is. Photographs help. A sketch helps. A formal drawing helps if you have one, and it is fine if you do not. We work in carpentry and joinery, and we will tell you honestly if the job is one we should take.",
      },
      {
        type: "p",
        text: "We are based in Devizes and work across the Southwest of England. If the job is well outside that, say so at the start so neither of us wastes a week finding out.",
      },
      {
        type: "h2",
        text: "The same standard, on a smaller stage",
      },
      {
        type: "p",
        text: "Stand-alone work does not get a lighter standard because it is smaller. The attention to detail people know us for on development sites is the same attention we bring to a job that is not part of a site programme. If fire doors are involved, the BlueSky accreditation still applies to the doors we install.",
      },
      {
        type: "p",
        text: "The simplest start is still a call on 07834 454106, or an email to sxwcarpentry@outlook.com. Tell us it is a stand-alone project in the first line. We will take it from there.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
