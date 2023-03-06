export interface CartProps{
   
    count:number,
    inCart:boolean,
    setCount:Function,
    setInCart:Function,
    item:ItemProp,
    
}
export interface ItemProp{
    id:number,
    name:string,

}
export interface CartIemProps{
    id:number,
    quantity?:number
}
