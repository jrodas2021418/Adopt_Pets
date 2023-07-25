import {Routes, Route, Navigate} from 'react-router-dom'
import {AdoptRoutes} from '../Adopt'
import {HomePage} from '../Adopt/components/HomePage';
import { userAuthenticated } from '../auth/helpers/loginHelper';
import LoginPage from '../auth/pages/LoginPage';
import { CreateUser } from '../auth/pages/CreateUser';

export const AppRouter = ()=>{
    return(
        <>
          
          <Routes>

            <Route path='/' element={userAuthenticated() ? (<HomePage />) : (<Navigate to="/login" />)} />
            <Route path='/login' element={!userAuthenticated() ? (<LoginPage></LoginPage>) : (<Navigate to="/" />)} />
            <Route path='/create-user' element={<CreateUser></CreateUser>} />
            <Route />
             
                <Route path="/*" element={<AdoptRoutes/>}/>
          </Routes>
        
        </>
    )
}
