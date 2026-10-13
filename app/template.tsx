import { ViewTransition } from "react";

// Remonta a cada navegação: a página antiga sai e a nova entra com desfoque.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
