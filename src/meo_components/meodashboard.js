import Sidebarmeo from './Layouts/sidebarmeo';
import Header from './Header/Header'
import hcbgImage from "./hcbg.jpg";
// import Sidebarmeo from '../Layouts/sidebarmeo';
const meoDashboard = () => {
    return (
        <>
         <Sidebarmeo />
        <Header />
       
         <div
        class="bg_image"
        style={{
          backgroundImage: `url(${hcbgImage})`,
          backgroundSize:"cover",
          height: "100vh",
          width:'100%',
          color: "#f5f5f5",
          position:'auto',
          overflow:"auto"
        }}
      >
      </div>
           
        </>
    );
}
export default meoDashboard