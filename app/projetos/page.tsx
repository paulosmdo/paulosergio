import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projetos" };

const projetos = [
  {
    nome: "FlowEV",
    descricao: "Descrição em breve.",
  },
  {
    nome: "Voltimer",
    url: "https://voltimer.paulosergio.dev.br",
    descricao:
      "App Android para carros elétricos que calcula o tempo de recarga e avisa quando a bateria chega ao nível escolhido.",
  },
  {
    nome: "PuleFila",
    url: "https://pulefila.com.br",
    descricao: "Site de vendas de ingressos. Chegue na frente, sem esperar.",
  },
];

export default function Projetos() {
  return (
    <>
      <h2>Projetos</h2>
      <p>Algumas coisas que construí.</p>
      <ul className="list">
        {projetos.map(({ nome, url, descricao }) => (
          <li key={nome}>
            <span>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {nome}
                </a>
              ) : (
                nome
              )}
            </span>
            <span>{descricao}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
