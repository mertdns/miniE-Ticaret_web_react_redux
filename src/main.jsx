import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import About from './pages/About/index.jsx'
import Contact from './pages/Contact/index.jsx'
import Notfound from './pages/notFound/index.jsx'
import Products from './pages/Products/index.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import ProductDetail from './pages/productDetail/index.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/home' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Notfound />} />
                <Route path='/products' element={<Products />} />
                <Route path='/productdetail/:id' element={<ProductDetail />} />
                <Route path='/productdetail' element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    </Provider>
)
