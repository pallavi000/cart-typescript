import {createContext,useContext} from 'react'


export const AddContext= createContext()

export function useCartcontext() {
    return useContext(AddContext)
  }

function CartContext(props:any){

    


    return(
        <AddContext.Provider>
            {props.children}

        </AddContext.Provider>
    )
   
}

export default CartContext
