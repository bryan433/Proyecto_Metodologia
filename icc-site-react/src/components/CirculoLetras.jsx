import React from "react";

const CirculoLetas = ({ letter, active }) => {
    return(
        <div className={`w-12 h-12 flex items-center justify-center rounded-full 
                      text-white font-bold text-lg
                        ${active ? "bg-blue-500" : "bg-gray-600"}`}>
      {letter}
    </div>
    );

}

export default CirculoLetas;