import Link from "next/link";


export default function Admin() {
    return (
        <div className="text-center">
            <h1 className="p-4 text-3xl">Admin Page</h1>
            <Link href={"/admin/categories"} className="mr-5 text-2xl underline hover:text-gray-900">Categories</Link>
            <Link href={"/admin/products"} className="mr-5 text-2xl underline hover:text-gray-900">products</Link>
        </div>
    )   
}