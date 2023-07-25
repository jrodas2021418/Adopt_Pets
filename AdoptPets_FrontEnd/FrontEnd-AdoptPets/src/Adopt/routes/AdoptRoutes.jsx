import {Navigate,Route, Routes } from "react-router-dom"
import {Navbar} from '../../ui/components';
import {Solicitud} from '../pages'
import { Adopcion } from "../pages";
import { HomePage } from "../components/HomePage";
import { Contact } from "../pages";
import { Comentario } from "../pages";
import { CreateComentario } from "../pages/CreateComentario";
import { UpdateComentario } from "../pages/UpdateComentario";
export const AdoptRoutes =()=>{
    return (
        <>
           <Navbar/>
           <Routes>
               <Route path="solicitud" element={<Solicitud/>}/>
               <Route path="contact" element={<Contact/>}/>
               <Route path="adopcion" element={<Adopcion/>}/>
               <Route path="Home" element={<HomePage/>}/>
               <Route path="comentario" element={<Comentario/>}/>
                <Route path="/create" element={<CreateComentario/>}/>
                <Route path="/update" element={<UpdateComentario/>}/>
           </Routes>
        </>
    )
}