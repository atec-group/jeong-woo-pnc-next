import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { MenuTab } from '@/components/MenuTab';
import { company } from '@/constants/menuTabList';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <body>
      <Navbar />
        <div style={{ maxWidth: '1600px', maxHeight: '600px', margin: '0 auto'}}>
          <Image src="/home.jpeg" alt="home" width={1600} height={600} layout='responsive' />
        </div>
        <Footer />
      </body>
    </main>
  )
}
