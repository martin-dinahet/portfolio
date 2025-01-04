import { Cursor } from "@/components/Cursor";
import { Navigation } from "@/components/Navigation";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { GitHubGraph } from "@/components/GitHubGraph";
import { PORTFOLIO_DATA } from "@/lib/constants";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 selection:bg-white selection:text-neutral-900">
      <Cursor />
      <Navigation />

      <main>
        <section className="flex items-center justify-center h-screen px-8">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h1 className="text-6xl font-light leading-tight">{PORTFOLIO_DATA.tagline}</h1>
            <p className="text-neutral-400">{PORTFOLIO_DATA.bio}</p>
          </div>
        </section>

        <Work />
        <Skills />
        <GitHubGraph />
      </main>

      <footer className="px-8 py-8 text-sm text-center text-neutral-400">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.name}
      </footer>
    </div>
  );
}

export default App;
