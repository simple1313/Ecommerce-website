import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { toast } from "react-toastify";

var OrderSummary = () => {
    const {user} = useContext(UserContext);
    const [orderdata,setorderdata] = useState({})
    const navigate=useNavigate()
    useEffect(()=>
    {
        if(user)
        {
            fetchorderdetails();
        }
    },[user])

    var fetchorderdetails=async()=>
    {
        try 
        {
            const resp = await fetch(`http://localhost:9000/api/fetchorderdetails?un=${user.username}`)
            if(resp.ok)
            {
                var result = await resp.json(); 
                if(result.statuscode===0)
                {
                    setorderdata({});
                }
                else if(result.statuscode===1)
                {
                    setorderdata(result.orderdata);
                }
            }
            else
            {
                toast.error("Error Occured")
            }
        }
        catch (err) 
        {
            toast.error(err);
        }
    }
    var oncontinue=()=>
	{
		navigate("/categories")
	}

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><Link to="/homepage"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
                        <li className="active">Order Summary</li>
                    </ol>
                </div>
            </div>
            <div className="login" style={{ textAlign: "center" }}>
                <div className="container">
                    <h3>Thanks for shopping on our website. Your order number is {orderdata._id}</h3><br/>
            </div>
            <div style={{ textAlign: "center" }}>
          <input type="button" className="btn btn-primary" onClick={oncontinue} value="Continue Shopping" />
        </div>
                </div>
        </>

    )
}
export default OrderSummary;