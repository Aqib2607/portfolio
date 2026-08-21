import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Notes & Technical Insights — Aqib Jawwad Nahin</title>
        <meta
          name="description"
          content="Engineering articles and technical notes on full-stack architecture, Laravel performance, React patterns, and clean code."
        />
        <link rel="canonical" href="https://aqibjawwad.me/blog" />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white pt-32 sm:pt-40 pb-28">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="mb-20 pb-8 border-b border-white/10">
            <Link
              to="/"
              className="inline-flex items-center text-xs text-[#888888] hover:text-white mb-6 transition-colors gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Engineering Notes
            </p>
            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
              Latest Tech & Engineering Insights
            </h1>
            <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl mt-4 font-light leading-relaxed">
              Deep-dives into backend caching strategies, state synchronization, component boundaries, and software design principles.
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
                    <h2 className="text-2xl font-light text-white leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#888888]">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white group-hover:text-primary transition-colors"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogPage;
