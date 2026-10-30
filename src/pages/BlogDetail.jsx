import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBlogBySlug } from "../contentfulClient";

function getImageUrl(asset) {
  const url = asset?.fields?.file?.url;

  if (!url) return "";

  return url.startsWith("//") ? `https:${url}` : url;
}

// Render a Contentful Long text field as readable paragraphs.
function ArticleBody({ content }) {
  if (typeof content !== "string" || !content.trim()) {
    return (
      <div className="border border-[#ded8cf] bg-white/50 p-6 text-center sm:p-8">
        <h2 className="font-serif text-2xl text-[#302b27]">
          Article content is not available
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#77716b]">
          Please check the Body Content field in Contentful.
        </p>
      </div>
    );
  }

  // Split paragraphs using blank lines.
  const paragraphs = content
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="article-body">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-6 whitespace-pre-line break-words">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    window.scrollTo({ top: 0, behavior: "auto" });

    async function loadArticle() {
      setPost(null);
      setError("");
      setLoading(true);

      try {
        const entry = await fetchBlogBySlug(slug);

        if (!isActive) return;

        if (!entry) {
          setError("We couldn't find this story. It may not be published yet.");
          return;
        }

        setPost(entry);
      } catch (err) {
        console.error("Contentful article error:", err);

        if (isActive) {
          setError(
            "We couldn't load this story right now. Please try again shortly."
          );
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadArticle();

    return () => {
      isActive = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-[#f7f5f0] px-5 pt-32 text-[#77716b]">
        <div className="text-center">
          <div className="mx-auto mb-5 h-8 w-8 animate-spin rounded-full border-2 border-[#ded8cf] border-t-[#9b7b4b]" />
          <p className="font-serif text-xl">Preparing your story...</p>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-[#f7f5f0] px-5 pb-20 pt-36 text-center text-[#302b27]">
        <div className="max-w-lg">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9b7b4b]">
            Tilt Shift Pictures · Journal
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl">
            This story is unavailable
          </h1>

          <p className="mt-4 leading-7 text-[#77716b]">
            {error || "We couldn't find this article."}
          </p>

          <Link
            to="/blog"
            className="relative z-30 mt-8 inline-block border border-[#9b7b4b] px-6 py-3 text-xs uppercase tracking-[0.15em] transition hover:bg-[#9b7b4b] hover:text-white"
          >
            ← Back to the journal
          </Link>
        </div>
      </main>
    );
  }

  const fields = post.fields || {};
  const title = fields.title || "Untitled story";
  const featuredImage = fields.featuredImage;
  const bodyContent = fields.bodyContent;
  const imageUrl = getImageUrl(featuredImage);

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#302b27]">
      <article>
        {/* Article heading (top padding clears the fixed navbar) */}
        <header className="relative mx-auto max-w-5xl px-5 pb-10 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
          <Link
            to="/blog"
            className="relative z-30 mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#81776d] transition hover:text-[#9b7b4b]"
          >
            <span aria-hidden="true">←</span> All stories
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#9b7b4b] sm:text-xs">
              Tilt Shift Pictures <span className="px-2">·</span> Journal
            </p>

            <h1 className="font-serif text-4xl font-normal leading-[1.15] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <div className="mx-auto mt-8 h-px w-16 bg-[#9b7b4b]" />
          </div>
        </header>

        {/* Featured image */}
        {imageUrl && (
          <figure className="mx-auto mb-12 max-w-6xl px-5 sm:mb-16 sm:px-8">
            <img
              src={imageUrl}
              alt={featuredImage?.fields?.description || title}
              className="max-h-[680px] w-full object-cover"
            />
          </figure>
        )}

        {/* Article body */}
        <div className="mx-auto max-w-3xl px-5 pb-16 text-base leading-8 text-[#514b45] sm:px-8 sm:pb-24 sm:text-lg sm:leading-9">
          <ArticleBody content={bodyContent} />

          {/* Closing section */}
          <footer className="relative mt-16 border-t border-[#ded8cf] pt-8 sm:mt-20">
            <p className="font-serif text-2xl leading-relaxed text-[#302b27] sm:text-3xl">
              Every wedding has a story worth remembering.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#77716b]">
              At Tilt Shift Pictures, we capture the moments, emotions, and
              little details that make your story yours.
            </p>

            <Link
              to="/blog"
              className="relative z-30 mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#9b7b4b] transition hover:text-[#725832]"
            >
              Explore more stories <span aria-hidden="true">→</span>
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}