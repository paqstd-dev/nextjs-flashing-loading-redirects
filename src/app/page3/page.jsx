import Link from "next/link";

export const dynamic = 'force-dynamic'

export default async function Page() {
    await fetch('http://127.0.0.1:3000/api', {
        cache: 'no-cache'
    })

    return <>
        Page 3
        <Link href="/">Home</Link>
    </>
}