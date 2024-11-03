import PostCard from "../../components/PostCard.jsx";



export default async function posts() {

    let posts = await fetch("https://jsonplaceholder.typicode.com/posts", {cache : "no-cache" } )
    posts = await posts.json();

    return (
        <div className="container mx-auto text-center">
            {posts.map((data) => <PostCard
                data={data} />)}
        </div>
    )
}
