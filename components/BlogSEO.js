import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, description, publishedAt, url, image }) => {
    const date = new Date(publishedAt).toISOString()
    const featuredImage = {
        url: `https://example.io${image}`,
        alt: title
    }

    return (
        <>
            <NextSeo
                title={`${title} – Erick Rosa`}
                description={description}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date
                    },
                    url,
                    title,
                    description: description,
                    images: [featuredImage]
                }}
            />
            <ArticleJsonLd
                authorName="Erick Rosa"
                dateModified={date}
                datePublished={date}
                description={description}
                images={[featuredImage]}
                publisherLogo="/static/favicons/android-chrome-192x192.png"
                publisherName="ErickRosa"
                title={title}
                url={url}
            />
        </>
    )
}

export default BlogSeo