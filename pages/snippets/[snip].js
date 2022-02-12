import { useRouter } from 'next/router'

const Snippets = () => {
    const router = useRouter()
    const { snip } = router.query

    return (
        <>
            <p>snippets: {snip}</p>
        </>
    )
}

export default Snippets