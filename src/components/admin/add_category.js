import React,{useState,useEffect} from "react";
import "./addcategory.css";
import axios from "axios";
import FaceIcon from "@material-ui/icons/Face";

export default function AddCategory(){
    const [categoryName, setCName] = useState("");
    
   
    
    async function save(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:3000/api/lb/category",{
                categoryName:categoryName
            });
            alert("Category Added successfully");
        }catch(err){
            alert(err);
        }
    }

    return(

        <div className="updateProfileContainer">
            <div className="updateProfileBox">
                <br></br>
                <br></br>
              <h2 className="updateProfileHeading">Add Category</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={save}
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Category Name"
                    required
                    name="fname"
                    value={categoryName}
                    onChange={(e) => setCName(e.target.value)}
                  />
                </div>
                

                
                <input
                  type="submit"
                  value="Save"
                  className="updateProfileBtn"
                  onSubmit={save}
                />
              </form>
            </div>
          </div>
    );
}