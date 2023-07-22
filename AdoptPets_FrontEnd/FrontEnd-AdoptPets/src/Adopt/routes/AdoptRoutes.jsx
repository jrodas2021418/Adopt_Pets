import {Navigate,Route, Routes } from "react-router-dom"
import {Navbar} from '../../ui/components';
import {Solicitud} from '../pages'

export const AdoptRoutes =()=>{
    return (
        <>
           <Navbar/>
           <Routes>
               <Route path="solicitud" element={<Solicitud/>}/>


           </Routes>
        </>
    )
}