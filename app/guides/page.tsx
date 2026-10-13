import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Plain-language notes from SXW Carpentry Ltd in Devizes, on development carpentry, stand-alone projects, and fire door installation.",
};

export default function GuidesPage() {
  return (
    <main id="main" className="guides-page">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">From the team</p>
          <h1>Notes worth reading before you instruct us.</h1>
          <p>
            Short guides from SXW Carpentry Ltd in Devizes. They cover the work we actually do: development carpentry, stand-alone projects, and fire doors we can certify ourselves.
          </p>
        </header>
        <ol className="guide-index">
          {guides.map((guide, index) => (
            <li key={guide.slug}>
              <Link href={`/guides/${guide.slug}`} className="guide-row">
                <span className="guide-index-no">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="guide-kicker">{guide.category}</span>
                  <span className="guide-row-title">{guide.title}</span>
                  <span className="guide-row-copy">{guide.description}</span>
                </span>
                <span className="guide-time">{guide.minutes} min</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
