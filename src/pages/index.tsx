import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const routes = [
    {
      title: "Client Side Rendering - CSR",
      url: "/csr",
    },
    {
      title: "Server Side Rendering - SSR",
      url: "/ssr",
    },
    {
      title: "Static Site Generation - SSG",
      url: "/ssg",
    },
    {
      title: "Incremental Static Regneration - ISR",
      url: "/isr",
    },
  ];

  return (
    <div>
      <h3>Rendeding Modes:</h3>
      <ul>
        {routes.map((r) => (
          <li>
            <button onClick={() => router.push(r.url)}>{r.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
