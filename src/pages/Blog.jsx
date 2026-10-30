import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBlogs } from "../contentfulClient";
import blogImage from "../assets/blog-image1.jpeg";

function getImageUrl(asset) {
  const url = asset?.fields?.file?.url;
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

function getExcerpt(body) {
  if (!body?.content) return "";

  return body.content
    .filter((block) => block.nodeType === "paragraph")
    .map((block) =>
      block.content?.map((item) => item.value || "").join("")
    )
    .filter(Boolean)
    .join(" ")
    .slice(0, 180);
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllBlogs()
      .then(setPosts)
      .catch((err) => {
        console.error("Contentful error:", err);
        setError("Unable to load articles. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#302b27]">
      {/* Hero with background image */}
      <section className="relative flex min-h-[470px] items-center justify-center overflow-hidden bg-[#302b27] px-5 pb-20 pt-32 text-center sm:min-h-[520px]">
        {/* Background image */}
        <img
          src={blogImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-5xl text-white">
          <p className="mt-15 text-xs font-medium uppercase tracking-[0.3em] text-[#d1ad54]">
            Tilt Shift Pictures
          </p>

          <h1 className="mx-auto max-w-4xl  font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Stories That Stay With You
          </h1>

          <p className="mx-auto  max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
            Wedding inspiration, photography advice, and stories about
            preserving the moments that matter most.
          </p>
        </div>
      </section>

      {/* Blog listing */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#9b7b4b]">
            From Our Journal
          </p>
          <h2 className="font-serif text-3xl font-normal sm:text-4xl">
            Wedding Stories & Advice
          </h2>
        </div>

        {loading && (
          <p className="py-16 text-center text-[#77716b]">
            Loading wedding stories...
          </p>
        )}

        {error && (
          <p className="py-16 text-center text-red-700">{error}</p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="py-16 text-center text-[#77716b]">
            No articles published yet. Please check back soon.
          </p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const {
                title,
                slug,
                featuredImage,
                bodyContent,
              } = post.fields;

              const imageUrl = getImageUrl(featuredImage);
              const excerpt = getExcerpt(bodyContent);

              return (
                <article key={post.sys.id} className="group min-w-0">
                  <Link to={`/blog/${slug}`} className="block">
                    {imageUrl ? (
                      <div className="overflow-hidden bg-[#e7e2d9]">
                        <img
                          src={imageUrl}
                          alt={title}
                          loading="lazy"
                          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="grid aspect-[3/2] place-items-center bg-[#e7e2d9] font-serif text-[#77716b]">
                        Tilt Shift Pictures
                      </div>
                    )}

                    <div className="pt-6">
                      <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#9b7b4b]">
                        Wedding Journal
                      </p>

                      <h3 className="font-serif text-2xl font-normal leading-snug transition-colors group-hover:text-[#9b7b4b]">
                        {title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#77716b]">
                        {excerpt || "Discover the story in our latest article."}
                        {excerpt.length >= 180 ? "..." : ""}
                      </p>

                      <span className="mt-5 inline-block text-xs tracking-wide text-[#9b7b4b]">
                        Read the story ↗
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}