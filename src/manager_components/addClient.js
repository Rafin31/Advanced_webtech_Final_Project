import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Layouts/manager_navBar";


const AddClient=()=> {
    const history = useHistory();
    const [error, setError] = useState({
        error: []
    })
    const [user, setUsers] = useState({
        id: "",
        ac_type: "",
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
            <NavBar status="Add Client" />
            <p align="center"><form   
    
    onSubmit={(e)=>
    {
      e.preventDefault();
      //console.log("Name is : "+user.name);
      axios.post('http://localhost:8000/api/addclient',user)
      .then(response=> 
        {
          console.log("Succesfully respond")
          alert("Client Added !");
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
    Account Type  
     <br></br> 
    <select  name="ac_type" id="ac_type" value={user.ac_type} onChange={onchange} >
    <option value=" "> </option>
                                                            <option value="deposit">Deposit</option>
                                                            <option value="savings">Savings </option>
                                                            
                                                            </select>
    <br></br>
    Account Balance
     <br></br> 
    <input type="text" name="ac_balance" value={user.ac_balance} onChange={onchange}></input>
    <br></br>
     
    Account Status  
     <br></br> 
    <select    value={user.ac_sts}  name="ac_sts" onChange={onchange} >
    <option value=" "> </option>
                                                            <option value="Active">Active</option>
                                                            <option value="Inactive">Inactive </option>
                                                            
                                                            </select>
                                                            <br></br>
       NID No.  
     <br></br> 
    <input type="text" name="nid" value={user.nid} onChange={onchange}></input>
    <br></br>                                                   
    <input type="submit" className="btn" value="Add    Client "></input>
    </form>
    </p>
           </>

    );
}

export default AddClient;