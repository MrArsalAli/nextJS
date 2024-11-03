import React from "react"
import Link from "next/link"


export default function DashboardLayout({ children }) {
    return (
        <div className="mx-2 flex flex-col font-bold">
            <Link className="cursor-pointer" href={"/dashboard/profile"}>Profile</Link>
            <Link className="cursor-pointer" href={"/dashboard/settings"}>Settings</Link>
            <div> {children}</div>
        </div>
    )
}