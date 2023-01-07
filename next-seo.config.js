const title = 'Erick Rosa'
const description = ''

const SEO = {
    title,
    canonical: 'https://erickrosa.dev',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        site_name: 'Erick Rosa - Portfolio',
        url: 'https://erickrosa.dev',
        title,
        description,
        images: [
            {
                url: "/images/vintagepc.png",
              width: 800,
              height: 420,
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