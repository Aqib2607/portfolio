export interface EngineeringDecision {
  decision: string;
  why: string;
  alternativesConsidered: string[];
  tradeoffs: string;
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export type ProjectType =
  | "Development Project"
  | "Portfolio Project"
  | "Academic Project"
  | "Academic / Portfolio Project";

export interface Project {
  // Identity
  slug: string;
  title: string;
  description?: string;
  projectType: ProjectType;
  badge?: string;
  role: string;
  duration: string;

  // Media
  image: string;
  gradient: string;
  demoType?: "video";

  // Optional Action Links (rendered dynamically only when valid non-empty URL is provided)
  live?: string;
  sourceFiles?: string;

  // Overview
  overview: string;
  businessProblem: string;
  impact: string;

  // Case Study Details
  problemStatement?: string;
  businessGoals?: string[];
  targetUsers?: string[];

  // Technical Architecture & Decisions
  technologies: string[];
  features?: string[];
  technicalInsights?: string[];
  engineeringDecisions?: EngineeringDecision[];

  // Architecture Narrative
  architecture?: string;
  databaseDesign?: string;
  deploymentStrategy?: string;
  ciCd?: string;
  testingApproach?: string;

  // Security & Performance Considerations
  securityConsiderations?: string[];
  performanceOptimizations?: string[];

  // Learnings & Process
  challenges?: Challenge[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
}
