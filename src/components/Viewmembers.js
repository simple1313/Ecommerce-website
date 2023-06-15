import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

var Viewmembers = () => {
    const [msg, setmsg] = useState()
    const [membslist, setmembslist] = useState([])
    useEffect(() => {
        fetchmembers()
    }, [])
    var fetchmembers = async () => {
        try {
            const resp = await fetch("http://localhost:9000/api/fetchallmembers")
            if (resp.ok) {
                var result = await resp.json();
                if (result.statuscode === 0) {
                    setmsg("No members found");
                }
                else if (result.statuscode === 1) {
                    setmembslist(result.membsdata);
                }
            }
            else {
                setmsg("Error Occured")
            }
        }
        catch (err) {
            setmsg(err);
        }
    }
        
        var ondel=async(uid)=>
        {
            var uchoice = window.confirm("Are you sure to delete?");
            if(uchoice)
            {
                try 
                {
                    const resp = await fetch(`http://localhost:9000/api/delmember/${uid}`,
                    {
                        method:"delete",
                      
                    })
                    if(resp.ok)
                    {
                        var result = await resp.json(); 
                        if(result.statuscode===1)
                        {
                           alert("Member deleted successfully")
                           setmembslist([]);
                           fetchmembers()
                        }
                        else if(result.statuscode===0)
                        {
                            setmsg("Error while signing up, try again");
                        }
                    }
                    else
                    {
                        setmsg("Error Occured")
                    }
                }
                catch (err) 
                {
                    setmsg(err);
                }
            }
        }
    

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><Link to="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
                        <li className="active">Register Page</li>
                    </ol>
                </div>
            </div>
            <div className="login">
                <div className="container">
                    <h2>List of members</h2><br/>
                    {
                        membslist.length>0?
                            <table className='timetable_sub'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Username</th>
                                        <th>Delete</th>
                                    </tr>
                                    {
                                        membslist.map((data, i) =>
                                            <tr key={i}>
                                                <td>{data.name}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.username}</td>
                                                <td><button name="btn" onClick={()=>ondel(data._id)}>Delete</button></td>
                                            </tr>
                                        )
                                        }
                                </tbody>

                            </table> : null
                    }
                    {msg}
                </div>
            </div>
        </>
    )
}
export default Viewmembers;