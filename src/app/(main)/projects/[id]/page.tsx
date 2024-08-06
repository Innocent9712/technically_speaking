export default function Project({ params }: { readonly params: { readonly id: string } }) {
    return <div>My Post: {params.id}</div>
}
