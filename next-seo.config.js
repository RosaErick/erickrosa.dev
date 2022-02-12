const title = 'Erick Rosa'
const description = 'Erick Rosa, Web Developer, javascript enthusiast and Internet Systems student'

const SEO = {
    title,
    description,
    canonical: 'https://example.io',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://example.io',
        title,
        description,
        images: [
            {
                url: 'https://example.io/favicon.ico',
                alt: title
            }
        ]
    },
    twitter: {
        handle: '@bjmncrlsn',
        site: '@bjmncrlsn',
        cardType: 'summary_large_image'
    }
}

export default SEO