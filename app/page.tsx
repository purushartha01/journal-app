import Link from "next/link";

export default function Home() {
    return (
        <div className="w-screen h-screen flex justify-center items-center text-white">
            <div className="w-full max-w-[600px] mx-auto">
                <h1 className="text-5xl font-bold mb-4">Journal App</h1>
                <p className="text-lg mb-4">
                    You can now write about your thoughts and experiences in
                    everyday life and track how your day went by.
                </p>
                <div>
                    <Link href="/sign-in">
                        <button className="border border-white rounded px-4 py-2 hover:bg-white hover:text-black cursor-pointer transition active:scale-90">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
