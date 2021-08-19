import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
          <h1>New Offer For Clients</h1>
          <div className="container">
          <div className="row">
            <div className="col">
            <div class="card" >
            <img src="https://picsum.photos/200/301" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
                        </div>
            <div className="col">
            <div class="card" >
            <img src="https://picsum.photos/200/323" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col">
            <div class="card" >
        <img src="https://picsum.photos/200/306" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
            </div>

            <div className="col">
            <div class="card" >
        <img src="https://picsum.photos/200/309" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
            </div>

            <div className="col">
            <div class="card" >
        <img src="https://picsum.photos/200/38" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
            </div>
        </div>
        </div>

       
      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));

export default Example;

