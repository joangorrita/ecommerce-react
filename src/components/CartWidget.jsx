import { useState } from "react";



function CartWidget({titulo, img}){

const [count, setCount]= useState(0);



function handleClick(){
    setCount ( count + 1)
}



    return (
        <div>
        <div>
            <img src={img} alt="" />
            <h3> {titulo}</h3>
        </div>


        <button onClick={handleClick}>
            <p>+</p>
        </button>
        <div>
            <span><p>Likes: {count} </p></span>
        </div>
        </div>
    )
}


export default CartWidget;