export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Architecture" | "Performance" | "Engineering" | "Career";
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "scaling-laravel-redis",
    title: "Scaling Laravel: When to Reach for Redis",
    excerpt: "A deep dive into caching strategies, queue management, and pub/sub patterns to handle high-concurrency Laravel applications efficiently.",
    date: "July 12, 2026",
    readTime: "8 min read",
    category: "Performance",
    tags: ["Laravel", "Redis", "Scaling", "Caching"],
    content: `
      <h2>The N+1 Problem and Caching Strategy</h2>
      <p>In data-driven web applications, relational databases can quickly become a throughput bottleneck when handling repetitive queries for static or slow-changing data.</p>
      <p>An effective architectural response is introducing an in-memory datastore like Redis to serve frequently requested datasets and offload time-consuming processes.</p>
      
      <h3>1. Cache Tags for Granular Invalidation</h3>
      <p>Instead of clearing the entire cache when a record is updated, Laravel's cache tags allow grouping related keys. This enables developers to invalidate specific categories or resource tags without purging unrelated application cache items.</p>
      
      <h3>2. Asynchronous Queue Processing</h3>
      <p>Operations such as dispatching emails, processing image assets, and generating PDF reports should not block the primary HTTP request lifecycle. Offloading these tasks to a Redis-backed queue worker ensures rapid response times for end users.</p>
      
      <h3>Key Takeaway</h3>
      <p>Redis serves as a versatile tool for in-memory caching, queue management, and temporary session storage, helping maintain responsive web applications under heavy traffic.</p>
    `,
  },
  {
    id: "2",
    slug: "react-query-optimistic-ui",
    title: "Mastering Optimistic Updates with React Query",
    excerpt: "How to build interfaces that feel instantly responsive by mutating UI state before the server responds, handling rollbacks gracefully.",
    date: "June 28, 2026",
    readTime: "6 min read",
    category: "Engineering",
    tags: ["React", "TypeScript", "React Query", "UX"],
    content: `
      <h2>Perceived Performance and Immediate Feedback</h2>
      <p>In modern web applications, users expect actions like toggling tasks, moving items, or editing fields to reflect instantly. Waiting for a network roundtrip before updating UI state introduces perceptible latency.</p>
      
      <h3>The Solution: Optimistic State Updates</h3>
      <p>Using React Query's <code>onMutate</code> lifecycle, client-side state can be updated immediately while a snapshot of previous state is preserved for rollback if the network request fails.</p>
      
      <pre><code>
// Example React Query mutation pattern
onMutate: async (newItem) => {
  await queryClient.cancelQueries({ queryKey: ['items'] });
  const previousItems = queryClient.getQueryData(['items']);
  queryClient.setQueryData(['items'], (old) => [...(old || []), newItem]);
  return { previousItems };
}
      </code></pre>
      
      <h3>Graceful Rollback on Error</h3>
      <p>If the API responds with an error, the <code>onError</code> callback seamlessly restores the previous state snapshot and triggers user-friendly feedback, keeping application state consistent.</p>
    `,
  },
  {
    id: "3",
    slug: "solid-principles-frontend",
    title: "Applying SOLID Principles to React Components",
    excerpt: "SOLID principles are not just for backend OOP. Learn how Single Responsibility and Dependency Inversion help keep React component trees maintainable.",
    date: "May 15, 2026",
    readTime: "10 min read",
    category: "Architecture",
    tags: ["Architecture", "React", "Clean Code"],
    content: `
      <h2>Managing Component Complexity</h2>
      <p>As frontend codebases grow, components often accumulate mixed responsibilities: data fetching, complex state manipulation, formatting logic, and rendering.</p>
      
      <h3>Single Responsibility Principle (SRP)</h3>
      <p>A React component should ideally focus on a single concern. Extracting data fetching into custom hooks and complex transformations into utility functions keeps UI components focused primarily on presentation.</p>
      
      <h3>Dependency Inversion via Composition</h3>
      <p>Instead of hardcoding tightly coupled child components deep inside container trees, passing components via <code>children</code> or render props increases reusability and simplifies component testing.</p>
      
      <h3>Conclusion</h3>
      <p>Applying clean architectural patterns to frontend development creates modular, maintainable, and testable codebases that are easier to scale over time.</p>
    `,
  }
];
