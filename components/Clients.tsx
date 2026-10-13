import { Reveal } from "@/components/Reveal";

const clients = [
  { src: "/images/beaverfit.png", alt: "Beaverfit", width: 406, height: 177 },
  { src: "/images/curo.png", alt: "Curo", width: 276, height: 177 },
  { src: "/images/mccarthy-stone.png", alt: "McCarthy Stone", width: 406, height: 177 },
  { src: "/images/highwood.png", alt: "Highwood", width: 406, height: 177 },
];

export function Clients() {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="wrap clients-inner">
        <h2 id="clients-title">Clients</h2>
        <Reveal>
          <ul className="logo-row">
            {clients.map((client) => (
              <li key={client.alt}>
                <img src={client.src} alt={client.alt} width={client.width} height={client.height} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
