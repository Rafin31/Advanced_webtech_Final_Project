
import { Link, useHistory } from 'react-router-dom';
const Request=({id,request_id ,description,status}) =>
    {
    const accept=(id)=>
    {
      console.log("CLick"+id);
    }
    return (
        <div className='division'>
            
       
        <p> ID: {id}   </p>
        <p>request_id : {request_id} </p>
       
        <p> description  : {description}</p>
        <p> status: {status} </p>
        </div>
    )
    
    };


    
    export default Request;