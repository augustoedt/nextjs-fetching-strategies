import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const routes = [
    {
      title: "CSR",
      url: "/csr",
    },
    {
      title: "SSR",
      url: "/ssr",
    },
    {
      title: "SSG",
      url: "/ssg",
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
