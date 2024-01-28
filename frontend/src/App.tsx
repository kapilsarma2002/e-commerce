import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import HomeScreen from './screens/HomeScreen.tsx'

const Cart = () => (
  <div>
    <h2>Cart Page</h2>
  </div>
)

const SignIn = () => (
  <div>
    <h2>Sign In Page</h2>
  </div>
)

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
