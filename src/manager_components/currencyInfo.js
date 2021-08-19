import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Layouts/manager_navBar";


const Currency=()=> {
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


    
    return (
      <>
            <NavBar status="Currency Info" />
            <marquee width="100%" direction="right" height="100px" > Todays Currency Exchange rate . . . . . . . . .Todays Currency Exchange rate . . . . . . . . .Todays Currency Exchange rate . . . . . . . . . </marquee>
            <p align="center"> <iframe src="https://www.islamibankbd.com/curr_ex_rate.php" height="400px" width="320px"></iframe>
    </p>
           </>

    );
}

export default Currency;