import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

const BlogSection = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Technical Writing and Insights">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Engineering Notes • Architecture Insights
            </p>
            <h2 className="font-heading text-4xl sm:text-6xl font-light text-white tracking-tight">
              Latest tech & engineering insights
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B3B3B3] font-light max-w-md">
            Architectural deep-dives on caching, state synchronization, component modularity, and clean code.
          </p>
        </div>

        {/* 3-Article Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#888888] font-mono">
                  <span className="text-primary">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <Link to={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                  <h3 className="font-heading text-2xl font-light text-white leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-primary transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
