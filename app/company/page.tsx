import { Navbar } from '@/components/Navbar';
import { MenuTab } from '@/components/MenuTab';
import { company } from '@/constants/menuTabList';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function Company() {
  return (
    <main>
      <body>
        <Navbar />
        <div style={{ maxWidth: '1600px', margin: '0 auto'}}>
            <Image src="/company/main.png" alt="company" width={500} height={100} layout='responsive' />
        </div>
        <MenuTab menuItem={company} />
        <Footer />
      </body>
    </main>
  )
}
