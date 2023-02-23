// Getting async local data.
import data from '@/data.json' assert { type: 'JSON' };

export default async function page() {

    const { posts } = data

    return (
        <section className="flex flex-wrap">
            {posts.map((item, idx) => {
                return (
                    <article key={idx} className="w-96 transition-all m-10 py-4 px-6 shadow border-4 border-black/25 rounded hover:border-pink-600 hover:scale-[1.01]">
                        <h2 className="font-bold text-white text-2xl">{item.title}</h2>
                        <p className="text-gray-400">{item.description}</p>
                    </article>
                )
            })}
        </section>
    )
}
