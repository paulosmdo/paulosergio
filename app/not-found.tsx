import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>Página não encontrada</h2>
      <p>
        Volte para a <Link href="/">página inicial</Link>.
      </p>
    </>
  );
}
