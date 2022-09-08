import { AA } from "../../Listas/AA";
import data from "../../Listas/allData";
import { FILTRADO, UPDATESTOCK } from "../actions/actions";



const initialState = {
    allJson: data
}

const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case FILTRADO:
            switch (action.payload) {
                case "AA":
                    return {
                        ...state,
                        allJson : data.filter(e=>e.lista === "AA")
                    }
                case "divalo":
                    return {
                        ...state,
                        allJson : data.filter(e=>e.lista === "divalo")
                    }
                case "fader":
                    return {
                        ...state,
                        allJson : data.filter(e=>e.lista === "fader")
                    }
                case "sg":
                    return {
                        ...state,
                        allJson : data.filter(e=>e.lista === "sg")
                    }
                case "indulock":
                    return {
                        ...state,
                        allJson : data.filter(e=>e.lista === "indulock")
                    }
                case "az":
                    let prueba = [...state.allJson]
                    let respuesta = prueba.sort((a,b)=>{
                        if(a.name < b.name)return -1
                    })
                    return {
                        ...state,
                        allJson : respuesta
                    }
                case "za":
                    let za = [...state.allJson]
                    let respuestaAz = za.sort((a,b)=>{
                        if(a.name > b.name)return -1
                    })
                    return {
                        ...state,
                        allJson : respuestaAz
                    }
                case "min":
                    let min = [...state.allJson]
                    let respuestaMin = min.sort((a,b)=>{
                        if(a.precio < b.precio)return -1
                    })
                    return {
                        ...state,
                        allJson : respuestaMin
                    }
                case "max":
                    let max = [...state.allJson]
                    let respuestaMax = max.sort((a,b)=>{
                        if(a.precio > b.precio)return -1
                    })
                    return {
                        ...state,
                        allJson : respuestaMax
                    }
                default:
                    return {
                        ...state,
                        allJson : data
                    }
            }
        case UPDATESTOCK:
            let copia = [...state.allJson];
            copia.forEach(i=>{
                if(i.id === action.payload.id){
                    i.stock = action.payload.value
                }
            })
            return {
                ...state,
                allJson: copia
            }
        default:
            return state
    }
};

export default rootReducer;