import {Routes, Route} from 'react-router-dom'
import EditProduct from '../pages/EditProduct/EditProduct'
import Home from '../pages/Home/Home'
import NewProduct from '../pages/NewProduct/NewProduct'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/newproduct" element={<NewProduct/>}></Route>
            <Route path="/product/:id" element={<EditProduct/>}></Route>
        </Routes>
    )
}

export default MainRoutes