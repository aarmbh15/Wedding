
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN,
});

export async function fetchAllBlogs() {
  const response = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
  });

  return response.items;
}

export async function fetchBlogBySlug(slug) {
  const response = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  return response.items[0] ?? null;
}
