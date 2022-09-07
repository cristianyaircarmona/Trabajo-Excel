import { useDispatch, useSelector } from 'react-redux'
import { filtros } from '../redux/actions/actions'



export const useFiltros = () => {
    const dispatch = useDispatch();
    const allJson = useSelector(state=>state.allJson);
    const filtrar = value =>{
        switch (value) {
            case "AA":
                dispatch(filtros("AA"));
                break;
            case "divalo":
                dispatch(filtros("divalo"));
                break;
            case "fader":
                dispatch(filtros("fader"));
                break;
            case "sg":
                dispatch(filtros("sg"));
                break;
            case "indulock":
                dispatch(filtros("indulock"));
                break;
            case "az":
                dispatch(filtros("az"));
                break;
            case "za":
                dispatch(filtros("za"));
                break;
            case "min":
                dispatch(filtros("min"));
                break;
            case "max":
            dispatch(filtros("max"));
            break;
            default:
                dispatch(filtros())
                break;
        }
    }
    return {
        filtrar,
        allJson
    }
}
