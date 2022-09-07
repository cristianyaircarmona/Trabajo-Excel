import { AA } from "./AA";
import { divalo } from "./divalo";
import { fader } from "./fader";
import { indulock } from "./indulock";
import { sg } from "./sg";
const fader1 =
fader.map(e =>{
    return{
        id:e.id,
        name: e.name,
        precio: e.precio,
        precioPublico: e.precioPublico,
        lista: e.lista
    }
})

const JSON = [...divalo, ...AA , ...indulock,...fader1,...sg]

JSON.forEach((i)=>{
    i.stock=0
})

export default JSON