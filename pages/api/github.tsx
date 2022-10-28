export default async (req, res) => {
    const url = "https://api.github.com/users/RosaErick/repos?per_page=100"
    const response = await fetch(url)
    const json = await response.json()

    const projectsList = []

    json.forEach(p => {
        projectsList.push({
            "name": p.name,
            "stars": p.stargazers_count,
            "url": p.html_url,
            "description": p.description,
            "language": p.language,
            "homepage": p.homepage,
            "topics": p.topics,
            "created_at": p.created_at,
            "updated_at": p.updated_at,
        })
    })

    return res.status(200).json({
        repos: projectsList
    })
}

