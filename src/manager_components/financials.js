

   const Trans=({id,current_balance,credit,credit_type,debit,debit_type}) =>
    {
    return (
        <div className='division'>
            
       
        <p> ID: {id}  current_balance : {current_balance} 
       
       credit  : {credit}
      credit type: {credit_type}
        debit: {debit}
        debit type: {debit_type} </p>

        </div>
    )
    
    };


    
    export default Trans;