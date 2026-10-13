import { Reveal } from "@/components/Reveal";

export function Instagram() {
  return (
    <section className="instagram" aria-labelledby="instagram-title">
      <div className="wrap">
        <Reveal className="instagram-inner">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 id="instagram-title">Follow the work as it happens.</h2>
          </div>
          <a className="btn btn-secondary" href="https://www.instagram.com/sxw_carpentry_ltd_/" target="_blank" rel="noopener noreferrer">
            Follow on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
