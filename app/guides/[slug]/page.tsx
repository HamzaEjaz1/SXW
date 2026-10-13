import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      images: [{ url: guide.image, alt: guide.imageAlt }],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const others = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <main id="main" className="guide">
      <article className="wrap guide-layout">
        <div>
          <p className="eyebrow">
            <Link href="/guides">Guides</Link>
            <span aria-hidden="true"> / </span>
            {guide.category}
          </p>
          <h1>{guide.title}</h1>
          <p className="guide-dek">{guide.description}</p>
          <p className="guide-byline">
            SXW Carpentry Ltd, Devizes <span aria-hidden="true">·</span> {guide.minutes} minute read
          </p>
          <figure className="guide-figure">
            <Image src={guide.image} alt={guide.imageAlt} width={1600} height={1065} quality={90} priority />
          </figure>
          <div className="guide-body">
            {guide.blocks.map((block, index) => {
              if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
              if (block.type === "ul") {
                return (
                  <ul key={index}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </div>
        <aside className="guide-aside">
          <p className="award-kicker">Talk to us</p>
          <p>If this is close to the job you have in mind, call or send a note. We are easier to reach than this page suggests.</p>
          <a className="btn btn-primary" href="/#contact">
            Request a quote
          </a>
          <a className="guide-phone" href="tel:+447834454106">
            07834 454106
          </a>
        </aside>
      </article>
      <section className="wrap more-guides" aria-labelledby="more-guides-title">
        <h2 id="more-guides-title">More from the team</h2>
        <ul>
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/guides/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
