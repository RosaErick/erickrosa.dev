import { useRouter } from 'next/router'

const Project = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <>
            <p>Project: {pid}</p>
        </>
    )
}

export default Project