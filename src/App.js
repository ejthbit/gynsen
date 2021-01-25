import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MainCarousel from './components/MainCarousel/MainCarousel'
import Order from './components/Order/Order'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <MainCarousel />
                <Order />
            </div>
        </Router>
    )
}

export default App
