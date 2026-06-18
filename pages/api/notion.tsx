const NOTION_BLOG_ID = "e9c9b6fdc4184d03840f783363a89650";

export const getAllPosts = async () => {
  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};
