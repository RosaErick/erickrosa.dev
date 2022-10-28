const NOTION_SNIP_ID = 'c77f5540ad52472c96e163a3ecb0dd49'

export const getAllSnippets = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_SNIP_ID}`
  ).then((res) => res.json());
}