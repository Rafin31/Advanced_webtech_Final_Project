

   const Client=({id,account_type,account_balance,account_status,nid_varification}) =>
    {
    const str ="ID";
    const text=str.fontcolor("green")

    return (
        <div className='division'>
            
        <p> <b> ID:  </b> {id}</p>
        <p><b> Account Type:</b>  {account_type} </p>
        <p> <b> Account Balance: </b> {account_balance} </p>
        <p> <b>  Nid No: </b>  {nid_varification} </p>
        <p> <b> Account Status: </b> { account_status =="Inactive" ? 'Inactive':'Active' } </p>
        </div>
    )
    
    };


    
    export default Client;