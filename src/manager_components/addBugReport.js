import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Layouts/manager_navBar";


const AddBug=()=> {
    const history = useHistory();
    const [error, setError] = useState({
        error: []
    })
    const [user, setUsers] = useState({
        id: "",
        type: "",
        description: ""
      
    });


    const onchange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    
    
    

    return (
      <>
            <NavBar status="Report A Bug " />
            <p align="center"> <form   
    
    onSubmit={(e)=>
    {
      e.preventDefault();
      //console.log("Name is : "+user.name);
      axios.post('http://localhost:8000/api/addbug',user)
      .then(response=> 
        {
          if (response.data.status === 201) {
            alert("Validation Failed");
          }
          else
          {
            console.log("Succesfully respond")
            alert("Report Sent!");
          }
         
        })
        .catch(
          error=>
          {
            console.log(error.response)
            alert (error);
          }
        )
    }
  }

    >



   <label>
    Report ID   
    <br></br>
    <input type="text" name="id" value={user.id} onChange={onchange}></input>
    </label>
     <br></br>
    <br></br>
    Bug Description 
     <br></br> 
     <input type="text" name="description" value={user.description} onChange={onchange}></input>
    
     
    <br></br>
   
    Bug Type  
     <br></br> 
    <select    value={user.type}  name="type" onChange={onchange} >
    <option value=" "> </option>
                                                            <option value="IT">IT</option>
                                                            <option value="System">System </option>
                                                            <option value="Server">Server </option>
                                                            </select>
                                                            <br></br>
                                                    
    <input type="submit" className="btn" value="Add Report"></input>
    </form>
    </p>
           </>

    );
}

export default AddBug;