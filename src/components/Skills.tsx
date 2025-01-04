import { PORTFOLIO_DATA } from "@/lib/constants";

export function Skills() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-light mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-neutral-400 text-sm mb-4 font-mono">
                {category}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-light hover:text-neutral-400 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}