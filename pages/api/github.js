export default async (req, res) => {
    const url = "https://api.github.com/users/RosaErick/repos"
    const response = await fetch(url)
    const json = await response.json()
    const projectsList = []

    json.forEach(p => {
        projectsList.push({
            "name": p.name,
            "stars": p.stargazers_count,
            "url": p.html_url,
            "description": p.description,
            "language": p.language
        })
    })

    return res.status(200).json({
        repos: projectsList
    })
}