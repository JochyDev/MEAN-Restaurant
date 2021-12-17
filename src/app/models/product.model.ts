export interface Product {
    nombre: string,
    categoria: Categoria,
    url: string,
    precio?: number,
    description?: string
}


interface Categoria{
    _id:string,
    nombre: string
}