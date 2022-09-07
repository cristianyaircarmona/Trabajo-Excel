import { AA } from "./AA";
import { divalo } from "./divalo";
import fader from "./fader";
import { indulock } from "./indulock";
import sg from "./sg";

const data = [...divalo,...AA,...fader,...indulock,...sg]


data.forEach(e=>e.stock = 0)


export default data