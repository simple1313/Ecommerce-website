import { useState } from "react";
import { Link } from "react-router-dom";

var Searchuser = () => {
    const [uname, setuname] = useState()
    const [msg, setmsg] = useState("")
    const [udata, setudata] = useState({})
    const [flag, setflag] = useState(false)

    var onsearch = async () => {
        
        try {
            const resp = await fetch(`http://localhost:9000/api/searchmember?un=${uname}`)
            if (resp.ok) {
                var result = await resp.json();
                if (result.statuscode === 0) {
                    setflag(false)
                    setmsg("Invalid username");
                    setudata({})
                }
                else if (result.statuscode === 1) {
                    setflag(true)
                    setudata(result.membdata);
                    setmsg("")
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
                    <h2>Search user</h2><br />
                    <div className="login-form-grids animated wow slideup" data-wow-delay=".5s">
                        <form name="form1">
                            <input type="email" name="uname" placeholder="Email Address(Username)" required=" " onChange={(e) => setuname(e.target.value)} /><br/>
                            <input type="button" className="btn btn-primary" name="btn" onClick={onsearch} value="Search" /><br /><br/>
                            {
                                flag?
                               
                                    <div>
                                        <b>Name:-</b>{udata.name}<br />
                                        <b>phone:-</b>{udata.phone}<br />
                                    </div>:null
                            }
                            {msg}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Searchuser;