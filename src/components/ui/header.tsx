import type { FC } from "react";

export const Header: FC = () => {
  return (
    <div>
      <header className="sticky top-0 flex items-center justify-between gap-4 px-6">
        <h1 className="font-mono text-4xl">://martin-dinahet</h1>
        <nav>
          <ul className="tabs tabs-box">
            <li role="tab" className="tab btn join-item">
              Accueil
            </li>
            <li role="tab" className="tab btn join-item">
              Expérience
            </li>
            <li role="tab" className="tab btn join-item">
              Projets
            </li>
            <li role="tab" className="tab btn join-item">
              Contact
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
