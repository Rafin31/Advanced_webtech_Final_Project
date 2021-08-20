

   const Trans=({id,meeting_type,title,date,time,venue}) =>
    {
    return (
        <div className='division'>
            
       
        <p> Meeting ID: {id} </p>
       
        <p> Meeting type: {meeting_type}</p>
        <p> Title: {title}</p>
        <p> Date: {date} </p>
        <p> Time: {time}</p>
        <p>Venue: {venue}</p>

        </div>
    )
    
    };


    
    export default Trans;