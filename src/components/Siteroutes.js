import {Navigate,Route,Routes } from "react-router-dom"
import Login from "./Login"
import Homepage from "./Homepage"
import Signup from "./Signup"
import Thanks from "./Thanks"
import Viewmembers from "./Viewmembers"
import Searchuser from "./searchuser"
import Managecat from "./Managecat"
import ManageSubCat from "./ManageSubCat"
import ManageProduct from "./ManageProduct"
import UpdateSubCat from "./UpdateSubCat"
import UpdateProduct from "./UpdateProduct"
import ChangePassword from "./ChangePassword"
import ProductDetails from "./ProductDetails"
import ShowCategory from "./ShowCategory "
import  ShowSubCategory from "./ShowSubCategory "
import Showproducts from "./Showproducts "
import ShowCart from "./ShowCart"
import OrderSummary from "./OrderSummary"
import Checkout from "./Checkout"
import OrderProducts from "./OrderProducts"
import ViewOrders from "./ViewOrders"
import UpdateStatus from "./UpdateStatus"
import SearchProducts from "./SearchProducts"
import UserOrders from "./UserOrders"
import AdminHomepage from "./AdminHomepage"
import CreateAdmin from "./CreateAdmin"
import UserRoutesProtector from "./UserRoutesProtector"
import ContactUs from "./ContactUs"
import AdminRoutesProtection from "./AdminRoutesProtection"
import ActivateAccount from "./ActivateAccount"



const SiteRoutes=()=>
{
    return(
        <Routes>
          <Route path='/' element={<Navigate to="/homepage"/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/thanks' element={<Thanks/>}/>
            <Route path='/searchuser' element={<AdminRoutesProtection MyComp={Searchuser}/>}/>
            <Route path='/viewmembers' element={<AdminRoutesProtection MyComp={Viewmembers}/>}/>
            <Route path='/managecategory' element={<AdminRoutesProtection MyComp={Managecat}/>}/>
            <Route path='/managesubcategory' element={<AdminRoutesProtection MyComp={ManageSubCat}/>}/>
            <Route path='/updatesubcategory' element={<AdminRoutesProtection MyComp={UpdateSubCat}/>}/>
            <Route path='/updateproduct' element={<AdminRoutesProtection MyComp={UpdateProduct}/>}/>
            <Route path='/manageproduct' element={< AdminRoutesProtection MyComp={ManageProduct}/>}/>
            <Route path='/categories' element={< ShowCategory/>}/>
            <Route path='/subcategories' element={< ShowSubCategory/>}/>
            <Route path='/products' element={< Showproducts/>}/>
            <Route path='/details' element={< ProductDetails/>}/>
            <Route path='/cart' element={<UserRoutesProtector MyComp={ShowCart}/>}/>
            <Route path='/ordersummary' element={<UserRoutesProtector MyComp={OrderSummary}/>}/>
            <Route path='/checkout' element={<UserRoutesProtector MyComp={Checkout}/>}/>
            <Route path='/changepassword' element={<UserRoutesProtector MyComp={ChangePassword}/>}/>
            <Route path='/orderproducts' element={<UserRoutesProtector MyComp={OrderProducts}/>}/>
            <Route path='/vieworders' element={<AdminRoutesProtection MyComp={ViewOrders}/>}/>
            <Route path='/updatestatus' element={<AdminRoutesProtection MyComp={UpdateStatus}/>}/>
            <Route path='/searchproducts' element={<SearchProducts/>}/>
            <Route path='/orderhistory' element={<UserRoutesProtector MyComp={UserOrders}/>}/>
            <Route path='/adminhome' element={<AdminRoutesProtection MyComp={AdminHomepage}/>}/>
            <Route path='/createadmin' element={<AdminRoutesProtection MyComp={CreateAdmin}/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/activateaccount' element={<ActivateAccount/>}/>

            <Route path='/*' element={<h1>Page Not Found</h1>}/>
        </Routes>
    )
}
export default SiteRoutes;