import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from '../components/Navbar'
import QuienesSomos from '../pages/QuienesSomos'
import Home from '../pages/Home'
import Formulario from '../pages/Formulario'
import Personaje from '../pages/Personajes'
function AppRouter() {

    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes_somos" element={<QuienesSomos />} />

            <Route path="/formulario" element={<Formulario />} />
            <Route path="/personaje" element={<Personaje />} />
            
        </Routes>    
        </BrowserRouter>
    )
}
export default AppRouter;