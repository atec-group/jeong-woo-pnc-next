import { Navbar } from '@/components/Navbar';
import { MenuTab } from '@/components/MenuTab';
import { products } from '@/constants/menuTabList';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function Products() {
  return (
    <main>
      <body>
        <Navbar />
        <div style={{ maxWidth: '1600px', margin: '0 auto'}}>
            <Image src="/products/main.png" alt="products" width={500} height={100} layout='responsive' />
        </div>
        <MenuTab menuItem={products} />
        <Footer />
      </body>
    </main>
  )
}
