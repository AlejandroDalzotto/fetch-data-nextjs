import { Josefin_Sans as JosefinSans } from '@next/font/google'

const josefinSans = JosefinSans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${josefinSans.className} text-white font-bold flex items-center justify-center h-full`}>
      <div>
        <h1 className='text-pink-600 font-bold text-5xl my-10'>Testing how to Fetch local | remote data in Next.js 13</h1>
        <p className='font-medium text-white text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora.</p>
      </div>
    </div >
  )
}
