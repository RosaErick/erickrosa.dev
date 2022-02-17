const title = 'Erick Rosa'
const description = 'Erick Rosa, Web Developer, javascript enthusiast and Internet Systems student'

const SEO = {
    title,
    description,
    canonical: 'https://erickrosa.dev',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://erickrosa.dev',
        title,
        description,
        images: [
            {
                url: 'https://erickrosa.dev/imgs/favicon.ico',
                alt: title
            }
        ]
    },
    instagram: {
        handle: '@e_rozza',
        site: '@e_rozza',
        cardType: 'summary_large_image'
    }
}

export default SEO