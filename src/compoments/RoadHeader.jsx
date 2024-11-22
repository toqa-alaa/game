import "./RoadHeader.moduls.css"
import Card from './Card'



function RoadHeader() {
    return (
        <div className="main ">      
        <div className="container">      
            <ul className="rmheader ">  
                  <button> Advanced filter <img src="src/assets/Filter.svg" alt="" />  </button>

                <li><i className="fa-solid fa-fire"></i> Featured</li>
                <li><i className="fa-solid fa-border-all"></i> All items</li>
                <li><i className="fa-solid fa-book-open"></i> Read</li>
                <li> <img src="./src/compoments/Vector.svg" alt="" /> product</li>
                <li><img src="src/assets/Button (2).png" alt="" /></li>
            </ul>
</div>
  <div className="full">
    <div className="right m-5">
        <div>
        <div className="filter d-flex "> 
            <span className="text-white">Applied Filter</span>
            <span className="">clear all</span>
        </div>
        <button></button>
        <button></button>
        <button></button></div>
        <div>      <label htmlFor="range">price range</label>  <input type="range" />
            <div className="r-price ">
                <span className="text-white">0.01  $NUZ</span> 
            <span className="text-white">10 $NUZ</span></div> 

</div>
     
    
    
        <div>
            <label htmlFor="type">type</label>
    <select className="d-block" name="type" id="">
    <option value="free">free</option>
    <option value="featured">featured</option>
    <option value="free"></option>
    </select> 
    </div>
       <div className="">
        <label htmlFor="categeory">categeory</label>
        
    <select className="d-block" name="categeory" id="" >
    <option value="free">free</option>
    <option value="featured">featured</option>
    <option value="free"></option>
    </select> 
    </div>
    
        <div>
            <label htmlFor="artist">artist</label>

    <select className="d-block" name="artist" id="">
    <option value="free">free</option>
    <option value="featured">featured</option>
    <option value="free"></option>
    </select> 
    </div>
    
    
       </div>
            <Card/>
            <Card/>
            <Card/>
            
            </div>
        </div>
    )
}
 export default RoadHeader