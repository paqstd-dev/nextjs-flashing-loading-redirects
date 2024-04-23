import Link from "next/link";
import {revalidatePath} from "next/cache";

export default function Home() {
    revalidatePath('/', 'layout')

    return <>
        <Link href="/page1" prefetch={false}>Page1</Link>
        <Link href="/page2" prefetch={false}>Page2</Link>
        <Link href="/page3" prefetch={false}>Page3</Link>
    </>
}
