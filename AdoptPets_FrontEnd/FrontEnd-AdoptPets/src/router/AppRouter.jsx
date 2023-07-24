import {Routes, Route, Navigate} from 'react-router-dom'
import {AdoptRoutes} from '../Adopt'
import {HomePage} from '../Adopt/components/HomePage';

export const AppRouter = ()=>{
    return(
        <>
          
          <Routes>
             
                <Route path="/*" element={<AdoptRoutes/>}/>
          </Routes>
        
        </>
    )
}
