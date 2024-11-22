import { Link } from "react-router-dom";
import './PageFooter.css'

function PageFooter() {
  return (
    <div className="footer-wrapper">
    <footer className=" footer">
      <div className="container">
       
          <div className="">
            <ul className="footer-links">
              <li>
                <Link to="/privacy" >
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/RoadMap" >
                  RoadMap
                </Link>
              </li>
              <li>
                <Link to="/Team" >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <div>Logo</div>
          </div>

          <div className="right-section">
              
                <a href="https://facebook.com" className="text-white">
                  <i className="fa-brands fa-facebook fa-2x"></i>
                </a>
           
           
                <a href="https://linkedin.com" className="text-white">
                  <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>
           
       
                <a href="https://twitter.com" className="text-white">
                  <i className="fa-brands fa-twitter fa-2x"></i></a>
 
            
          </div>
   </div>
         
  
        
    </footer>   
      <div className="text-center">Copyright
          <span>&copy; Nakarmaz</span> 2024 All right reserved</div>
    </div>
  );
}

export default PageFooter;
