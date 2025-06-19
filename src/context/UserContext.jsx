import React, {createContext, useState } from 'react'
import { food_items } from '../food'
// eslint-disable-next-line react-refresh/only-export-components
export const dataContext=createContext()
function UserContext  ({children})  {
     let[Cate,setCate]=useState(food_items)  
    let [input,setInput]=useState("")
    let[showCart,setShowCart]=useState(false)
    let data={
input,
setInput,
Cate,
setCate,
showCart,
setShowCart
    }
  return (
    <div>
        <dataContext.Provider value={data}>
{children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext
