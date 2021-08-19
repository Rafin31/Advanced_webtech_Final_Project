import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Layouts/manager_navBar";


const AddEmployee=()=> {
    const history = useHistory();
    const [error, setError] = useState({
        error: []
    })
    const [user, setUsers] = useState({
        id: "",
        name: "",
        ac_balance: "",
        nid: "",
        ac_sts: ""
      
    });


    const onchange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const submitted = (e) => {
        e.preventDefault();
        // console.log(data);
      


    }

    /*const load = () => {
        const result = axios.post("http://127.0.0.1:8000/api/addclient", JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                if (response.data.status === 200) {
                    alert("Client Added Succefully !!!");
                    history.push("/userlist")
                } else {
                    setError({
                        error: response.data.error
                    })
                }
            })
            .catch(error => {
                alert(error);
            })

    }*/

    return (
      <>
            <NavBar status="Hire Employee" />
            <p align="center"> <form   
    
    onSubmit={(e)=>
    {
      e.preventDefault();
      //console.log("Name is : "+user.name);
      axios.post('http://localhost:8000/api/addemployee',user)
      .then(response=> 
        {
          console.log("Succesfully respond")
          alert("Employee Added !");
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
    ID   
    <br></br>
    <input type="text" name="id" value={user.id} onChange={onchange}></input>
    </label>
     <br></br>
    <br></br>
    Name   
     <br></br> 
     <input type="text" name="name" value={user.name} onChange={onchange}></input>
    <br></br>
    Duration 
     <br></br> 
    <input type="text" name="duration" value={user.duration} onChange={onchange}></input>
    <br></br>
     
    Designation  
     <br></br> 
    <select    value={user.desig}  name="desig" onChange={onchange} >
    <option value=" "> </option>
                                                            <option value="Security Guard">Security Guard</option>
                                                            <option value="Customer Care Executive">Customer Care Executive </option>
                                                            
                                                            </select>
                                                            <br></br>
                                                      
    <input type="submit" className="btn" value="Add Employee"></input>
    </form>
    </p>
           </>

    );
}

export default AddEmployee;