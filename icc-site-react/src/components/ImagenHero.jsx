import React from "react";

function ImagenHero() {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <img
                className=" w-[70%] object-cover"
                src="https://icc.utalca.cl/imagenes/slider/2.png"
                alt="Imagen Utalca"
            />
        </div>
    );
    }

export default ImagenHero;