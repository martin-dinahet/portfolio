import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { fetchGithubContributions } from "@/lib/github";

type ContributionDay = {
  contributionCount: number;
  date: string;
};

export function GitHubGraph() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGithubContributions(PORTFOLIO_DATA.githubUsername);
        const days = data.data.user.contributionsCollection.contributionCalendar.weeks
          .flatMap((week: any) => week.contributionDays);
        setContributions(days);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-light mb-12">Recent Activity</h2>
        <div className="grid grid-cols-8 md:grid-cols-16 gap-1">
          {contributions.map((day) => (
            <div
              key={day.date}
              className="aspect-square rounded-sm transition-colors duration-200"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${
                  day.contributionCount > 0 ? 0.1 + day.contributionCount * 0.15 : 0.02
                })`,
              }}
              title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}