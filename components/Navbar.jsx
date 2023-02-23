"use client"

import Link from "next/link"

const navigation = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "remote data",
        route: "/posts"
    },
    {
        label: "local data",
        route: "/local"
    }
]

export default function Navbar() {
    return (
        <header>
            <nav className="w-96 py-4 px-10">
                <ul className="flex gap-10">
                    {navigation.map((item, idx) => {
                        return (
                            <li key={idx} className="font-medium text-white transition-all hover:text-pink-600">
                                <Link href={item.route}>{item.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
