import { useEffect, useState } from "react";
import { Github, Star, GitFork, Code2, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GITHUB_USERNAME = "aqib2607";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
}

interface GitHubStatsData {
  repos: number;
  stars: number;
  forks: number;
  followers: number;
  topLanguages: { name: string; count: number }[];
}

function StatCard({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: React.ElementType;
  value: number | string;
  label: string;
  color: string;
}) {
  return (
    <div className="p-6 rounded-3xl bg-[#0F0F0F] border border-white/10 flex flex-col items-center text-center gap-2 hover:border-primary/40 transition-colors">
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="text-2xl font-heading font-semibold text-white">{value}</div>
      <div className="text-xs text-muted-foreground font-mono">{label}</div>
    </div>
  );
}

function LanguageBar({ name, count, total }: { name: string; count: number; total: number }) {
  const pct = Math.round((count / total) * 100);
  const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f7df1e",
    PHP: "#777bb4",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Python: "#3572a5",
    Vue: "#42b883",
    Shell: "#89e051",
  };
  const color = langColors[name] || "#A2CA71";
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} aria-hidden="true" />
          {name}
        </span>
        <span className="text-muted-foreground">{pct}%</span>
      </div>
      <div className="h-1.5 bg-[#181818] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} ${pct}%`}
        />
      </div>
    </div>
  );
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHubStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const [user, repos]: [GitHubUser, GitHubRepo[]] = await Promise.all([
          userRes.json(),
          reposRes.json(),
        ]);

        if (cancelled) return;

        const ownRepos = repos.filter((r) => !r.fork);
        const stars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const forks = ownRepos.reduce((sum, r) => sum + r.forks_count, 0);

        const langCount: Record<string, number> = {};
        for (const repo of ownRepos) {
          if (repo.language) langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        }
        const topLanguages = Object.entries(langCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));

        setStats({ repos: user.public_repos, stars, forks, followers: user.followers, topLanguages });
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchGitHubStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="py-24 sm:py-32 relative" aria-label="GitHub activity and statistics">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="section-kicker mb-3">Code Telemetry</span>
            <h2 className="text-3xl sm:text-5xl font-heading font-normal text-white tracking-tight">
              GitHub <span className="font-serif italic font-normal text-primary">Activity</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            Open-source software exploration, repository activity, and demonstrative full-stack code.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" aria-busy="true" aria-label="Loading GitHub statistics">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-28 bg-[#111111] rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : error || !stats ? (
          <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 text-center">
            <Github className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-sm mb-4">Live telemetry temporarily unavailable.</p>
            <Button variant="outline" size="sm" className="rounded-full text-xs" asChild>
              <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
                <Github className="w-3.5 h-3.5 mr-2" /> View GitHub Profile
              </a>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard icon={Code2} value={stats.repos} label="Public Repos" color="bg-primary/10 text-primary" />
              <StatCard icon={Star} value={stats.stars} label="Total Stars" color="bg-amber-400/10 text-amber-400" />
              <StatCard icon={GitFork} value={stats.forks} label="Total Forks" color="bg-secondary/10 text-secondary" />
              <StatCard icon={TrendingUp} value={stats.followers} label="Followers" color="bg-accent/10 text-accent" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Top Languages */}
              <div className="p-7 rounded-3xl bg-[#0F0F0F] border border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                  Top Languages Breakdown
                </h3>
                {stats.topLanguages.length > 0 ? (
                  <div className="space-y-4">
                    {stats.topLanguages.map((lang) => (
                      <LanguageBar
                        key={lang.name}
                        name={lang.name}
                        count={lang.count}
                        total={stats.topLanguages.reduce((s, l) => s + l.count, 0)}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">No language distribution data available.</p>
                )}
              </div>

              {/* Profile card */}
              <div className="p-7 rounded-3xl bg-[#0F0F0F] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-white/10 flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">@{GITHUB_USERNAME}</p>
                      <p className="text-xs text-primary font-mono">Full Stack Engineer</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    Explore repositories showcasing React, TypeScript, Laravel architecture, relational database migrations, and systems simulation projects.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Button
                    variant="outline"
                    className="border-white/15 bg-white/5 hover:bg-white/10 text-white rounded-full text-xs gap-2 w-full"
                    asChild
                  >
                    <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      View Profile on GitHub
                      <ExternalLink className="w-3.5 h-3.5 ml-auto text-primary" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default GitHubStats;
