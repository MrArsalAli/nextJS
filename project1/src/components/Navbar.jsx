import Link from 'next/link'


export default function Navbar() {
    return(
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href={"/dashboard"} className="mr-5 hover:text-gray-900">Dashboard</Link>
      <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact Us</Link>
      <Link href={"/blogs"} className="mr-5 hover:text-gray-900">Blogs</Link>
      <Link href={"/posts"} className="mr-5 hover:text-gray-900">Posts</Link>
      <Link href={"/shadecn"} className="mr-5 hover:text-gray-900">ShadeCN</Link>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <Link href={"/admin"} className="mr-5 hover:text-gray-900">Admin</Link>
    </div>
  </div>
</header>

    )
}

