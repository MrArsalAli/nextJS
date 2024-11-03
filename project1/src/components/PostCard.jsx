import Link from "next/link";


export default function PostCard({data}) {
    return (
        <Link href={`posts/${data.id}`}>
        <div class="md:flex-grow shadow border my-2 cursor-pointer">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{data.title}</h2>
          <p class="leading-relaxed">{data.body}</p>
        </div>
        </Link>

    )
}
