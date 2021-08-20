import ReactToPdf from 'react-to-pdf';
import TransList from './transactionsList';
import NavBar  from '../Layouts/manager_navBar';
function PDF() {
    const ref = TransList;
   return (
    <>





 <NavBar status="Employees's Salary List"> </NavBar>
 

    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>


</>

); 
}
export default PDF;

