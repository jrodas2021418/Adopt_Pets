import {Navigate,Route, Routes } from "react-router-dom"
import {Navbar} from '../../ui/components';
import {Solicitud} from '../pages'
import { Contact } from "../pages";
import { Comentario } from "../pages";
export const AdoptRoutes =()=>{
    return (
        <>
           <Navbar/>
           <Routes>
               <Route path="solicitud" element={<Solicitud/>}/>
               <Route path="contact" element={<Contact/>}/>
               <Route path="comentario" element={<Comentario/>}/>

           </Routes>
        </>
    )
}