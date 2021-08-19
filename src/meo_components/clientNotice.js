// import React from 'react';
// import Pdf from "react-to-pdf";

// const ref = React.createRef();

// const noticeClient = (props) => {
//   return (
//     <>
//       <div className="Post" ref={ref}>
//         {/* <h1>{props.title}</h1>
//         <img src={props.image} alt={props.title} />
//         <p>{props.content}</p> */}

// {/* <div class="card" style="width: 18rem;"></div>
//   <img class="card-img-top" src={props.image} alt="Card image cap"/>
//   <div class="card-body">
//     <h5 class="card-title">{props.title}</h5>
//     <p class="card-text">{props.content}</p> */}

// <ul class="list-group"/>
//   <li class="list-group-item">Dapibus ac facilisis in</li>

  
//   <li class="list-group-item list-group-item-primary">{props.title}</li>
//   <li class="list-group-item list-group-item-secondary">{props.content}</li>
//   <li class="list-group-item list-group-item-success">{props.title}</li>
//   <li class="list-group-item list-group-item-danger">{props.content}</li>
//   <li class="list-group-item list-group-item-warning">This is a warning list group item</li>
//   <li class="list-group-item list-group-item-info">This is a info list group item</li>
//   <li class="list-group-item list-group-item-light">{props.title}</li>
//   <li class="list-group-item list-group-item-dark">This is a dark list group item</li>

//     {/* <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>{props.title}</td>
//       <td>{props.content}</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>{props.content}</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table> */}

//   {/* <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div> */}




//       </div>
//       <Pdf targetRef={ref} filename="client.pdf">
//         {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary btn-lg">Capture as PDF</button>}
//       </Pdf>
//     </>
//   );
// }

// export default noticeClient;