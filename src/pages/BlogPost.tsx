import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { toast } from "sonner";

const normalizeBlogSlug = (s?: string) => {
  if (!s) return "";
  if (s === "scaling-laravel-when-to-reach-for-redis" || s === "scaling-laravel-redis") return "scaling-laravel-redis";
  if (s === "mastering-optimistic-updates-with-react-query" || s === "react-query-optimistic-ui") return "react-query-optimistic-ui";
  if (s === "applying-solid-principles-to-react-components" || s === "solid-principles-frontend") return "solid-principles-frontend";
  return s;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const normalizedSlug = normalizeBlogSlug(slug);
  const post = blogPosts.find((p) => p.slug === normalizedSlug || p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const createMarkup = () => {
    return { __html: post.content };
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} — Technical Article · Aqib Jawwad Nahin</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://aqibjawwad.me/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} — Aqib Jawwad Nahin`} />
        <meta property="og:description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white pt-32 sm:pt-40 pb-28">
        <div className="container mx-auto px-6 max-w-3xl">
          
          {/* Back Nav */}
          <div className="mb-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Engineering Notes
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 pb-8 border-b border-white/10 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#888888] font-mono">
              <span className="text-primary font-medium">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-[#B3B3B3] leading-relaxed font-light italic pt-4">
              "{post.excerpt}"
            </p>
          </header>

          {/* Article Prose Content */}
          <div 
            className="prose prose-invert max-w-none prose-headings:font-normal prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#FAFAFA] prose-p:text-[#B3B3B3] prose-p:font-light prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-code:text-primary prose-code:bg-[#161616] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-[#141414] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl"
            dangerouslySetInnerHTML={createMarkup()}
          />

          {/* Footer Author Card */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/about/profile_pic.jpg" 
                alt="Aqib Jawwad Nahin" 
                className="w-12 h-12 rounded-full object-cover object-top border border-white/15"
              />
              <div>
                <p className="font-medium text-white text-base">Aqib Jawwad Nahin</p>
                <p className="text-xs text-[#888888]">Full Stack Developer & Software Engineer</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full text-xs gap-2"
              onClick={handleShare}
            >
              <Share2 className="w-3.5 h-3.5" />
              Share Article
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogPost;
