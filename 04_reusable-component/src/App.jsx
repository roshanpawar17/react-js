import { ProductCard } from './components/ProductCard/ProductCard'

import './App.css'

function App() {
  return (
    <div className="app">
      <h2>Reusable Component</h2>

      <div>
        <h3>Product 1: </h3>
        <ProductCard name="Laptop" price={40000} />
      </div>

      <div>
        <h3>Product 2: </h3>
        <ProductCard name="Mobile" price={30000} />
      </div>

      <div>
        <h3>Product 3: </h3>
        <ProductCard name="Keyboard" />
      </div>
    </div>
  )
}

export default App
