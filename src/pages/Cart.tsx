import React, { useState } from 'react'
import Item from '../component/Item'
import { ItemProp } from '../interface/Interface'

function Cart() {
    const [items,setItems]= useState<Array<ItemProp>>([{
        id:1,
        name:'Dell Laptop'
    },
    {
        id:2,
        name:'Lenovo Laptop'
    },
    {
        id:3,
        name:'Acer Laptop'
    },
    {
        id:4,
        name:'Mac Book'
    },])
  



  return (
    <div className='grid grid-cols-4 gap-8 w-full h-full p-8'>
        {items.map(item=>{
            return(
        <Item item={item} items={items} />
            )
        })}
        
    </div>
  )
}

export default Cart