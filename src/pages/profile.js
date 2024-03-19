import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Container } from "reactstrap";
import Box from "@mui/material/Box";
import "./Profile.css"

const ShowProduct = () =>{
    const [details, setDetails] = useState([]);
    const config = {
        headers:{
            Authorization : "Bearer "+ localStorage.getItem('token')
        }
    }
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/lb/user/userinfo",config)
        .then(result=>{
            console.log(result)
            setDetails(result.data.user)
        })
        .catch(e=>{
            console.log(e)
        })
    },[],)
    return(
        <Box width={'100%'} sx={{
            
            background: 'url(https://source.unsplash.com/random)',
           
          }}> 
        <div className="profileContainer"  >
        <div>
          <h1>My Profile</h1>
          <img src={"http://localhost:3000/api/lb"+details.user_image} alt={details.fname} />
          <Link to="/profile/update">Edit Profile</Link>
        </div>
        <div>
          <div>
            <h4>Full Name</h4>
            <p>{details.fname} {details.lname}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{details.email}</p>
          </div>
        

          
        </div>
      </div>
    </Box>);
        
}
export default ShowProduct;
