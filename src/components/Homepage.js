import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import AOS from "aos";
import 'aos/dist/aos.css'

const fadeImages = [
  {
    url: 'images/slider1.jpg',
    caption: 'First Slide'
  },
  {
    url: 'images/slider2.jpg',
    caption: 'Second Slide'
  },
  {
    url: 'images/slider3.jpg',
    caption: 'Third Slide'
  },
  {
    url: 'images/slider4.jpg',
    caption: 'fourth Slide'
  },
  {
    url: 'images/slider5.jpg',
    caption: 'Fifth Slide'
  },
];


var Homepage=()=>
{
	const [prodsdata,setprodsdata] = useState([]);
    useEffect(()=>
    {
        fetchprods();
    },[])
    var fetchprods=async()=>
    {
		try 
		{
			const resp = await fetch(`http://localhost:9000/api/fetchlatestproducts`)
			if(resp.ok)
			{
				var result = await resp.json(); 
				if(result.statuscode===0)
				{
					toast.error("No products found");
					setprodsdata([]);
				}
				else if(result.statuscode===1)
				{
					setprodsdata(result.prodsdata)
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
    useEffect(()=>
{
  AOS.init({duration:2000})
},[])
    const divStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '800px'
    }
	return(
    <>
	 <div className="slide-container" data-aos="zoom-in"> 
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%', ...divStyle }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
	<div className="login" data-aos="zoom-in">
		<div className="container">
        {
            prodsdata.length>0?
            <>
            <h2>Latest Products</h2><br/>
            {
            prodsdata.map((data,i)=>
            <div key={i} className="col-md-4 top_brand_left">
                <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                        <div className="agile_top_brand_left_grid1">
                            <figure>
                                <div className="snipcart-item block " >
                                    <div className="snipcart-thumb" style={{padding:'10px',margin:'10px'}}>
                                        <Link to={`/details?pid=${data._id}`}>
                                        <img title=" " alt=" " height='125' src={`uploads/${data.prodpic}`}/>
                                        <p>{data.prodname}</p>
                                        </Link>	
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
            </>:<h2>No products found</h2>
        }
		</div>
	</div>
    </>
	)
}
export default Homepage;