import {Navigate,Route, Routes } from "react-router-dom"
import {Navbar} from '../../ui/components';
import {Solicitud, Adopcion } from '../pages'

export const AdoptRoutes =()=>{
    return (
        <>
           <Navbar/>
           <Routes>
               <Route path="solicitud" element={<Solicitud />}/>
               <Route path="adopciones" element={<Adopcion />}/>


           </Routes>
        </>
    )
}