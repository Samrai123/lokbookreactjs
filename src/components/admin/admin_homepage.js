import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import "./admin.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const ShowUser = () =>{
    const [details, setDetails] = useState([]);
    const config = {
        headers:{
            Authorization : "Bearer "+ localStorage.getItem('token')
        }
    }
    const deletePro = (user_id)=>{
        axios.delete("http://localhost:3000/api/lb/user/"+user_id,config)
        .then(result=>{
            console.log(result);
            if(result.data.success){
                window.location.reload("/admin/home")
            }
        })
        .catch(e =>{
            console.log(e)
        })
    }
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/lb/user",config)
        .then(result=>{
            console.log(result)
            setDetails(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[],)
    return(
        <div className="container">
            <br></br>
            <br></br>
            
            <h1 style={{textAlign: 'center'}}>List of User</h1>
            <br></br>
            <br></br>
            <div className="homescreen">
                
            {details.map(e=>{
                return(
                    <Card sx={{ minWidth: 700 , display: 'evenly',}} >
      <CardContent >
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          User Information
        </Typography>
        <Typography variant="h5" component="div">
          {e.fname} {e.lname}
        </Typography>
        
        <Typography variant="body2">
          Username : {e.username}
          <br />
          Email : {e.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>{deletePro(e._id)}} size="small">Remove</Button>
      </CardActions>
    </Card>
                    
                )
            })}
                </div>
            </div>
    )
}
export default ShowUser;