/*import './card.css'
function Card() {
    return (
        <div className="card bg-dark ">
            <h3>item 1</h3>
            <div>           
                 <img src="./src/assets/card.png" alt="cardimg" />
                 <span></span>
                 <span></span>
                 <div className="card-text">
                    <div>
                        <span>Current bid</span>
                        <span><img src="./src/assets/NUZ_logo_3Dcoin_pose01.svg" alt="" /> 5.3 $NUZ</span>
                    </div>
                    <button>

                    </button>

                 </div>

</div>
        </div>
    )
}export default Card

*/

import React from "react";
import "./Card.css"; // ملف CSS

const Card = ({ 
  image, 
  badgeIcon,
  title, 
  pic,
  price, 
  badgeText, 
  currentBid, 
  buttonText ,
  iconimg,
}) => {
  return (
    <div className="card "> 
           <h3 className="card-title">{title}</h3>
<div>      

      <img src={image} alt={title} className="card-image" />
      <div >
       <div className="iconimg">  <img src={iconimg}/></div>

       <div className="card-badge text-white">
             <div className="text-white">{badgeIcon}<i class="fa-solid fa-bolt"></i> {badgeText}</div></div> 

      </div></div>
      <div className="card-text ">
        <div  className="">  
      <span className="card-price text-white">Current bid: </span>
      <div className="card-amount">
      <img src={pic} alt={title} className="card-image" />
        {price}</div></div>
        <div>   
             <button className="card-button text-white">{buttonText}</button>
</div>
    
    </div>
    </div>
  );
};

// تحديد القيم الافتراضية
Card.defaultProps = {
  image: "./src/assets/card.png", // صورة افتراضية
  title: "item 1", // عنوان افتراضي
  pic:"src/assets/NUZ_logo_3Dcoin_pose01.svg",
  price:"5.3 $NUZ", // سعر افتراضي
  badgeText: "Rare", // نص الشارة الافتراضي
  buttonText: "Buy", // نص الزر الافتراضي
  iconimg:'src/assets/product.png'

};

export default Card;
