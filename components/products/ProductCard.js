import Link from 'next/link';

export default function ProductCard({ product }) {

  return (
    <div key={product.id} style={{ maxWidth: '400px' }}>
      <Link href={`/product/${product.id}`}>
        <img src={product.mainImage.url} alt="" style={{ width: '100%' }} />
        <h2>{product.name}</h2>
      </Link>
      <p>{product.price}</p>
    </div>)
}