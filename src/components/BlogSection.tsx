import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion/MotionPrimitives";

const BlogSection = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Technical Writing and Insights">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <FadeUp className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
        </FadeUp>

        {/* Interactive Row List matching Hampus reference video (01:04 - 01:10) */}
        <FadeUp delay={0.15} className="mb-16 divide-y divide-white/10 border-y border-white/10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="py-6 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#141414]/70 transition-all duration-300 rounded-xl"
            >
              <div className="space-y-1">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">
                  {post.title}
                </h3>
                <p className="text-xs text-[#888888] font-mono">
                  {post.date} • {post.readTime}
                </p>
              </div>

              <div className="flex items-center gap-6 self-start md:self-auto">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                  {post.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary text-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </FadeUp>

        {/* 3-Article Grid with Staggered Viewport Reveal */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article
                className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all duration-300 group h-full hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#888888] font-mono">
                    <span className="text-primary group-hover:underline">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                    <h4 className="font-heading text-2xl font-light text-white leading-snug">
                      {post.title}
                    </h4>
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
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default BlogSection;
