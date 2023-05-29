import { CartProductType } from "./redux/slices/cartSlice"

export const getFavoritesFromLS = () => {
  const data = localStorage.getItem('favorite')
  const itemsFavLS = data ? JSON.parse(data) : []
 
 
  return {
       itemsFavLS 
      }
  
}


export const calcTotalPrice = (items: CartProductType[]) => {
  
     return items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0) 
      
  }
  
  export const calcTotalCount = (items: CartProductType[]) => {
    return items.reduce((sum, obj) => {
    return obj.count + sum
    }, 0)
  }
  
  
  
  export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)
    const totalCount = calcTotalCount(items)
   
    return {
            items,
            totalPrice,
            totalCount,
        }
    
  }
  
  export const itemsCartLS = getCartFromLocalStorage()