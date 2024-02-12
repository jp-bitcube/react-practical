import React from 'react'

const ProductCard = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>{children}</div>
  )
}

export default ProductCard