import React from "react";

const Button = (props) => {
    return (
        <button className="bg-rose-300 text-black rounded font-[Poppins] py-2 px-6 md:ml-8 hover:bg-rose-500 duration-600"> 
            {props.children}
         </button>
    );
}
export default Button