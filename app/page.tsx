import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/avatar.png";

export default function Home() {
  return (
    <>
      <div className="avatar">
        <Image src={avatar} alt="Paulo Sérgio" sizes="120px" preload />
      </div>
      <p>
        Olá! Sou o Paulo Sérgio, Cientista da Computação formado pela
        Universidade do Estado do Rio Grande do Norte (UERN).
      </p>
      <p>Sou apaixonado por resolver problemas, por tecnologia e por jogos.</p>
      <p>
        Veja os <Link href="/projetos">projetos</Link> que construí ou as{" "}
        <Link href="/skills">tecnologias</Link> com que trabalho.
      </p>
    </>
  );
}
