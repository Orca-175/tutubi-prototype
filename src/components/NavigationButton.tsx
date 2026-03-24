import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function NavigationButton({ children }: Props) {
  return (
    <div className="nav-item">{children}</div>
  );
}

export default NavigationButton