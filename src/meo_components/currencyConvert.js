import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Sidebarmeo from "./Layouts/sidebarmeo";
// import Header from './Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const CurrencyConverter = () => {
  const [uSDAUD, setUSDAUD] = useState("");
  const [first, setFirst] = useState("USD");
  const [second, setSecond] = useState("BDT");
  const [rate, setRate] = useState([]);


const [data, setData] = useState({
  type:'',
  value:'',
  onChange:''
});


  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url:
  //       "https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=5a49beefa5e7696bc287",
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       setUSDAUD(response.data.USD_AUD);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  

  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=03e010758ddc571c337b`,
 
    })
      .then((response) => {
        console.log(response.data);

        setRate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  


  return (
    <>
    <Router>
      <Sidebarmeo />
     
          {/* <Header /> */}
          

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          width: "100%",
          backgroundColor: "black",
          fontSize: "30px",
          color: "#ee5f3b",
        }}
      >
        Currency Converter
        
      </div>
      
      <div
        style={{ height: "5px", width: "100%", backgroundColor: "#9ffe36" }}
      ></div>
      <br />
      <div style={{ marginLeft: "33%" }}>
        <div
          style={{
            height: "150px",
            width: "400px",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
            color: "#ee5f3b",
          }}
        >
          1 {first} = {rate[`${first}_${second}`]} {second}
        </div>
        <br />
       From: <input class="form-control" 
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />

       To: <input class="form-control" 
          type="text"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
       
        <button class="btn btn-dark"
          onClick={() => {
            getRate(first, second);
          }}
        >
          Convert Currency
        </button>
        
        
        <br />
        <br />

        <span class="badge badge-pill badge-info">Bangladeshi Taka= BDT</span>
        
        <br />

        <span class="badge badge-pill badge-info">United Stated Doller = USD</span>
        
        <br />

        <span class="badge badge-pill badge-info">Indian Rupee = INR</span>
        
        <br />
        <span class="badge badge-pill badge-info">Australian Doller =AUD</span>
        
        <br />
        <span class="badge badge-pill badge-info"></span>
        
        <br />

        


        <p></p>

        <a href="/meo_dashboard" className="btn btn-danger">Back to home</a> 
        
      </div>

      

    
        </Router>
        </>
  );
};

render(<CurrencyConverter />, document.querySelector("#root"));
export default CurrencyConverter;