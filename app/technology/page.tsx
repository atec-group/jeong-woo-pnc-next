import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function Technology() {
  return (
    <main>
      <body>
        <Navbar />
        <div style={{ maxWidth: '1600px', margin: '0 auto'}}>
            <Image src="/technology/main.png" alt="technology" width={500} height={100} layout='responsive' />
            <Image src="/technology/1.jpeg" alt="technology 1" width={500} height={100} layout='responsive' />
        </div>
        <Footer />
      </body>
    </main>
  )
}
