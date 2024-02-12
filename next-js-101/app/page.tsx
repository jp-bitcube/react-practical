import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import AddToChart from './components/AddToChart'

export default function Home() {
  return (
    <main>
      <div>
        Hello World !
      </div>
      <Link href='/users'>Users</Link>
      <ProductCard><AddToChart/></ProductCard>
    </main>
  )
}
