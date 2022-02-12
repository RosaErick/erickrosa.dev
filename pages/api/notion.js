const NOTION_BLOG_ID = 'e9c9b6fdc4184d03840f783363a89650'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}