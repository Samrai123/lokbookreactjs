import React,{useState,useEffect} from "react";
import "./UpdateProfile.css";
import axios from "axios";
import FaceIcon from "@material-ui/icons/Face";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
export default function UpdateProfile(){
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const config ={
        headers:{
            Authorization : "Bearer "+ localStorage.getItem('token')
        }
    }
    async function save(event){
        event.preventDefault();
        try{
            await axios.put("http://localhost:3000/api/lb/user/userinfo/update",{
                fname:fname,
                lname:lname,
                email:email,
            },config);
            alert("Profile updated successfully");
        }catch(err){
            alert(err);
        }
    }

    return(

        <div className="updateProfileContainer">
            <div className="updateProfileBox">
                <br></br>
                <br></br>
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={save}
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="fname"
                    value={fname}
                    onChange={(e) => setFName(e.target.value)}
                  />
                </div>
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    name="lname"
                    value={lname}
                    onChange={(e) => setLName(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                  onSubmit={save}
                />
              </form>
            </div>
          </div>
    );
}