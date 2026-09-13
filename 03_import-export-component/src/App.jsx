import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
    return (
        <div className="app">
            <Header />
            <main className="app-content">
                <h2>Welcome to Application</h2>
            </main>
            <Footer />
        </div>
    )
}

export default App
