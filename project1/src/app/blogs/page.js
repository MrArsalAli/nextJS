import Link from "next/link";


export const metadata = {
    title: 'Next Js Blogs',
}

export default function Blogs() {
    const blogs = [
        {
            id: 1,
            slug: 'introduction-to-react',
            title: 'Introduction to React',
            description: 'A beginner-friendly introduction to the React framework.'
        },
        {
            id: 2,
            slug: 'advanced-react-hooks',
            title: 'Advanced React Hooks',
            description: 'Learn how to master React hooks for state and effect management.'
        },
        {
            id: 3,
            slug: 'state-management-in-react',
            title: 'State Management in React',
            description: 'An overview of state management libraries and patterns in React.'
        },
    ];

    


    

    return (
        <>
        <div className="container flex flex-col text-center  mx-auto">
            <h1 className="font-bold mb-5 text-3xl">Blogs</h1>
            {blogs.map((data) =>
                <Link href={`/blogs/${data.slug}`} key={data.id}> <h1 className="container p-3 my-2 border mx-auto">{data.title}</h1></Link>
            )}
            
        </div>
        </>
    )
}
