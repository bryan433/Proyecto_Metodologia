import React from "react";
import NavBarPrincipal from "../components/NavBarPrincipal";

function AboutPage() {
return(
    <div className="w-5/6">
        <NavBarPrincipal/>
        <div className="flex gap-14">
            <img src="https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/67a38f516f517f6ae7dc24cb_Captura%20de%20pantalla%202025-02-05%20171808.png" alt=""  className="rounded-full"/>
            <div className="flex flex-col justify-center gap-7">
                <h1 className="text-5xl font-bold text-blue-900">Sobre nosotros</h1>
                <p className="text-gray-900 font-medium">
La Universidad de Talca es una institución de educación pública reconocida a nivel nacional y regional por su excelencia académica. Entre sus diversas carreras, destaca Ingeniería Civil en Computación, una disciplina con 27 años de trayectoria que forma profesionales en áreas clave como el desarrollo de software, redes de computadoras y bases de datos. Actualmente, la carrera es dirigida por Ruth Garrido y continúa evolucionando para preparar a sus estudiantes ante los desafíos tecnológicos del futuro.

El Team ICC está conformado por un grupo de estudiantes apasionados por la informática y comprometidos con la difusión de la carrera de Ingeniería Civil en Computación. Su objetivo es acercar esta disciplina a nuevos estudiantes, generar interés en el área y fortalecer la comunidad académica.

¡Te invitamos a explorar nuestro portal, aprender jugando y descubrir más sobre esta apasionante carrera!</p>
            </div>
        </div>
    </div>
);

}

export default AboutPage;