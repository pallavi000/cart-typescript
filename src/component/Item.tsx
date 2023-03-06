import React, { useState } from 'react'
import { CartProps } from '../interface/Interface'

function Item({item,items}:CartProps) {
    const[inCart,setInCart] = useState(false)
    const[count,setCount] = useState<number>(0)


    function addtocart(e:any,id){
        

            const find = items.findIndex(item=>item.id==id)
                if(find!=-1){
                    console.log('hello')
                    var a=0
                    setCount(count+1)
                     setInCart(true)
                }
        } 
     
    function decreaseCart(id){
        setCount(count-1)
    }
    
    function removeCart(id){
        setCount(0)
        setInCart(!inCart)
    }
    
  return (
   <>
        <div className=' shadow-lg border p-4 rounded-md'>
            <img src="https://cdn.verk.net/kuvastin/w:816/h:510/rt:fit/q:80/sh:0.5/plain/images/36/2_814033-3998x2672.jpeg" className=' h-48'/>
            <div className='flex justify-between items-center mt-4 mb-2'>
                <div className='text-xl font-bold'>
                    {item.name}
                </div>
                <div className='text-xl font-medium text-gray-600'>$1200</div>
            </div>

           { inCart?(
                <div className='flex flex-col  w-full' >
    <div className='flex items-center gap-1 p-1 justify-center '>
        <div className='py-1 px-2 bg-blue-500 rounded-md shadow-md text-white'onClick={()=>decreaseCart(item.id)}><i className="fa-solid fa-minus text-sm"  ></i></div>
        <div className='text-sm text-gray-600'>{count} in Cart</div>
        <div className='py-1 px-2 bg-blue-500 rounded-md shadow-md text-white'onClick={(e)=>addtocart(e,item.id)}><i className="fa-solid fa-plus text-sm" ></i></div>
    </div>
    <div className='mt-4 bg-red-800 text-white font-medium text-sm py-1 px-8 rounded-md w/2 mx-auto cursor-pointer' onClick={()=>removeCart(item.id)}>Remove</div>
    </div>
    ):(
        <div className='py-1 flex gap-2 justify-center items-center my-4 w-full bg-blue-500 border rounded-lg text-white font-medium cursor-pointer' onClick={(e)=>addtocart(e,item.id)}> <i className="fa-solid fa-plus"></i> Add To Cart</div> 
    )}
                      
          

        </div>
   </>
  )
}

export default Item