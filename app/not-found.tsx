import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not on the SXW Carpentry Ltd website.",
};

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page is not here.</h1>
        <p>The page may have moved. You can go back to the homepage or call the team.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            Back to homepage
          </Link>
          <a className="btn btn-secondary" href="tel:+447834454106">
            Call 07834 454106
          </a>
        </div>
      </div>
    </main>
  );
}
