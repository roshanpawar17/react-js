import { ProductCard } from './components/ProductCard/ProductCard';

import './App.css';

function App() {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2000
    }
  ];

  return (
    <>
      <h1>Map Method</h1>

      {/* 1st Way using () brackets - auto retuen */}
      {
        products.map((product) => (
          <div key={product.id}>
            <h2>Product {product.id}</h2>
            <ProductCard name={product.name} price={product.price} />
          </div>
        ))
      }

      {/* 2nd Way using {} & return keyword */}
      {/* {
        products.map((product) => {
          return (
            <div key={product.id}>
              <h2>Product {product.id}</h2>
              <ProductCard name={product.name} price={product.price} />
            </div>
          )
        })
      } */}
    </>
  )
}

export default App
