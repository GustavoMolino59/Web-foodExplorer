import { Route, Routes} from 'react-router-dom'

import { Home } from '../pages/home'
import { Details} from '../pages/details'
import { Favs } from '../pages/Favorites'
import { Historic } from '../pages/historic'
import { Payment } from '../pages/payment'
import { NotFound } from '../pages/404'
export function CostumerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path='/favorites' element={<Favs/>}/>
            <Route path='/historic' element={<Historic/>}/>
            <Route path='/payment' element={<Payment/>}/>

            <Route path='*' exact={true} element={<NotFound/>}/>
        </Routes>
    )
}