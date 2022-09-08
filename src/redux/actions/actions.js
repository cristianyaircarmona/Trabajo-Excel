export const FILTRADO = 'FILTRADO';
export const UPDATESTOCK = 'UPDATESTOCK'

export const filtros = value =>{
    return {type:FILTRADO,payload:value}
};

export const inStock = value =>{
    return {type:UPDATESTOCK, payload:value}
}
