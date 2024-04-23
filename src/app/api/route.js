export const dynamic = 'force-dynamic'

export const GET = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return new Response('ok');
}