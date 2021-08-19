import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Layouts/manager_navBar";


const AddMeeting=()=> {
    const history = useHistory();
    const [error, setError] = useState({
        error: []
    })
    const [user, setUsers] = useState({
        title: "",
        mt: "",
        venue: "",
        date: "",
        time: ""
      
    });


    const onchange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    
    
    

    return (
      <>
            <NavBar status="Arrange A Meeting " />
            <p align="center"> <form   
    
    onSubmit={(e)=>
    {
      e.preventDefault();
      //console.log("Name is : "+user.name);
      axios.post('http://localhost:8000/api/addmeeting',user)
      .then(response=> 
        {
          if (response.data.status === 201) {
            alert("Validation Failed");
          }
          else
          {
            console.log("Succesfully respond")
            alert("Meeting Enlisted !");
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
    Title
    <br></br>
    <input type="text" name="title" value={user.title} onChange={onchange}></input>
    </label>
     <br></br>
    <br></br>
    Venue
     <br></br> 
     <input type="text" name="venue" value={user.venue} onChange={onchange}></input>
    
     
    <br></br>
   
    Meeting Type
     <br></br> 
    <select    value={user.type}  name="mt" onChange={onchange} >
    <option value=" "> </option>
                                                            <option value="Meeting">Meeting</option>
                                                            <option value="Seminar">Seminar </option>
                                                            
                                                            </select>
                                                            <br></br>
                                                            Venue
     <br></br> 
     
     Date
     <br></br> 
     <input type="date" name="date" value={user.date} onChange={onchange}></input>
    
     
    <br></br>
    Time
     <br></br> 
     <input type="time" name="time" value={user.time} onChange={onchange}></input>
    
     
    <br></br>                                                
    <input type="submit" className="btn" value="Enlist Meeting"></input>
    </form>
    </p>
           </>

    );
}

export default AddMeeting;