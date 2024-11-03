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



export async function generateMetadata({ params}, parent) {
    const blog = blogs.find((data) => data.slug === params.slug )
   
   
    return {
      title: blog.slug,
    }
  }


export default function BlogDetail({ params }) {
    

    const blog = blogs.find((data) => params.slug === data.slug )
    return (
        <div>
            <h1 className="text-center font-bold text-4xl">{blog.slug}</h1>
            <p className="text-center text-2xl mt-5">{blog.description}</p>
        </div>
    )
}
