import PageNav from "../compoments/PageNav";
import PageFooter from "../compoments/PageFooter";
import Text from "../compoments/Text";
import'./HomePage.css'
import MainImg from "../compoments/MainImg";

export default function HomePage() {
    return (
        <main className="homepage">
            <PageNav/>
           
                  <Text/>
           <MainImg/>
          
 
            <PageFooter/>
            
        </main>
    )
}


