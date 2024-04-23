import {redirect} from "next/navigation";

export const dynamic = 'force-dynamic'

export default async function Page() {
    await fetch('http://127.0.0.1:3000/api', {
        cache: 'no-cache'
    })

    redirect('/page2')
}