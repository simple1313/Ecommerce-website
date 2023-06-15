// import { useEffect, useState } from "react";
// import { useSearchParams} from "react-router-dom" ;
// import { toast } from "react-toastify"
// import AOS from "aos";
// import 'aos/dist/aos.css'
// var ActivateAccount=()=>
// {
// 	useEffect(()=>
//     {
//       AOS.init({duration:2000})
//     },[])
//     const [msg, setmsg] = useState ("");
//     const [searchParams] = usesearchParams () ;
//     var (token) = usestate (searchParams.get ('token' )) ;
//     useEffect ( () =>
//     fetch (http://localhost: 5000/api/activateaccount?token=$(token
//     then (resp => resp.json ())
//     .then (result => (
//         setmsg (result.msg) ;
//         )) . catch ( (err) =>
//         console.log (err);
//         setmsg ("Error Occured");
//         =
//         ) ,[token]) 

// 	return(
//     <>
// 	    <div className="breadcrumbs">
// 		<div className="container">
// 			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
// 				<li><Link to="/homepage"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
// 				<li className="active">Login</li>
// 			</ol>
// 		</div>
// 	    </div>

// 	<div className="login" data-aos="zoom-in">
// 		<div className="container">
// 			<h2>Login Form</h2>
		
// 			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
// 				<form name="form1">
// 					<input type="email" placeholder="Email Address" name="un" onChange={(e)=>setuname(e.target.value)} required=" "/>
// 					<input type="password" placeholder="Password" name="pass" onChange={(e)=>setpass(e.target.value)} required=" "/>
// 					<div className="forgot">
// 						<a href="#">Forgot Password?</a>
// 					</div><br/>
// 					<input type="button" className="btn btn-primary" onClick={onlogin} value="Login"/><br/><br/>
// 					{msg}
// 				</form>
// 			</div>
// 			<h4>For New People</h4>
// 			<p><a href="registered.html">Register Here</a> (Or) go back to <a href="index.html">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>
// 		</div>
// 	</div>
//     </>)
// }
// export default ActivateAccount;	