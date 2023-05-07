// "use server"
import HowServiceDelivery from '@/src/components/Home/HowServiceDelivery'
import MyIntro from '@/src/components/Home/MyIntro'
import MyWorkProcess from '@/src/components/Home/MyWorkProcess'
import Pricing from '@/src/components/Home/Pricing'
import Testimonial from '@/src/components/Home/Testimonial'
import Image from 'next/image'

export default async function Home() {
  return (
    <main>
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
      <MyIntro />
      <MyWorkProcess />
      <HowServiceDelivery />
      <Testimonial />
      <Pricing />
    </main>
  )
}

