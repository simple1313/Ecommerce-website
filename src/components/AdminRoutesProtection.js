import { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
var AdminRoutesProtection=(props)=>
{
    const {user} = useContext(UserContext);
    const mynavigate = useNavigate();
    useEffect(()=>
    {
        if(!user)
        {
            mynavigate("/login");
        }
        else
        {
            if(user.usertype!="admin")
            {
                mynavigate("/login");
            }
        }
    },[user])
    return(
        <>
            <props.MyComp/>
        </>
    )
}
export default AdminRoutesProtection;