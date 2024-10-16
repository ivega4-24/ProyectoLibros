import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../../componentes/contenedor/Inicio";
import { LibroCrear } from "../../../componentes/libros/LibroCrear";
import { LibroListar } from "../../../componentes/libros/LibroListar";
import { LibroAdmin } from "../../../componentes/libros/LibroAdmin";
import { LibroActualizar } from "../../../componentes/libros/LibroActualizar";
import { AcercaDe } from "../../../componentes/otros/AcercaDe";
import { NoEncontrado } from "../../../componentes/contenedor/NoEncontrado";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route  path="/" element={< Inicio/>}/>
            <Route path="/libcre" element={< LibroCrear/>}/>
            <Route path="/liblis" element={< LibroListar/>}/>
            <Route path="/libadm" element={< LibroAdmin/>}/>

            <Route path="/libact/:codigo" element={< LibroActualizar/>}/>

            <Route path="/acer" element={< AcercaDe/>}/>

            <Route path="*" element={< NoEncontrado/>}/>

        </Routes>
    )
}