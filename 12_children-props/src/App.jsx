import Card from './components/Card/Card';

import './App.css'

function App() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1>Children Props</h1>
      
      <Card>
        <h2>User</h2>
        <p>Roshan</p>
      </Card>

      <Card width="w-[40%]">
        <h2>Product</h2>
        <p>Laptop</p>
      </Card>

      <Card width="w-[50%]">
        <h2>Order</h2>
        <p>Order #101</p>
      </Card>
    </div>
  )
}

export default App
