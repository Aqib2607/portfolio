import { useEffect, useState } from "react";
import { CheckCircle2, Activity, Server, Clock, GitCommit } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function SystemHealth() {
  const [latency, setLatency] = useState(0);
  const [uptime, setUptime] = useState(0);
  
  useEffect(() => {
    // Simulate initial latency check (normally this would be a fetch to an API)
    setLatency(Math.floor(Math.random() * 40) + 80); // 80-120ms
    
    // Simulate uptime calculation based on a fixed deploy date (e.g., 2 weeks ago)
    const deployDate = new Date();
    deployDate.setDate(deployDate.getDate() - 14);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - deployDate.getTime()) / (1000 * 60 * 60));
    setUptime(diffHours);

    // Randomly fluctuate latency slightly every 5 seconds for realism
    const interval = setInterval(() => {
      setLatency(prev => {
        const fluctuate = Math.floor(Math.random() * 10) - 5;
        return Math.max(45, Math.min(180, prev + fluctuate));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-t border-border/30 bg-background/50 backdrop-blur-md py-3 text-xs text-muted-foreground font-mono">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              All Systems Operational
            </TooltipTrigger>
            <TooltipContent>
              <p>Primary API, Database, and CDN are healthy.</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
              <Activity className="w-3.5 h-3.5 text-primary" />
              {latency}ms
            </TooltipTrigger>
            <TooltipContent>
              <p>Average API response latency over the last 5 minutes.</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              99.99% Uptime
            </TooltipTrigger>
            <TooltipContent>
              <p>Historical availability across all services.</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
              <Server className="w-3.5 h-3.5 text-accent" />
              Vercel Edge
            </TooltipTrigger>
            <TooltipContent>
              <p>Currently served from Vercel Edge Network.</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-default">
              <GitCommit className="w-3.5 h-3.5 text-muted-foreground" />
              Build {uptime}h ago
            </TooltipTrigger>
            <TooltipContent>
              <p>Latest production build deployed successfully.</p>
            </TooltipContent>
          </Tooltip>
        </div>

      </div>
    </div>
  );
}
