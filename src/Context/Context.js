import React, { createContext, useReducer, useState } from 'react'
import { faker } from '@faker-js/faker';

export const CartContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sort: action.payload };
    case 'CLEAR_FILTERS' :
      return { ...state, sort: null };
    default:
      return state;
  }
}

const Context = ({children}) => {

  faker.seed(100);

      const productsArray = [...Array(20)].map(() => ({
      id:faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.avatar(),
      inStock: faker.helpers.arrayElement([0, 3, 5, 7, 8]), 
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]) 

    }));

    const [cart,setCart] = useState([])

    const [state, dispatch] = useReducer(reducer, { 
      sort:null
  });


  return (
    <CartContext.Provider value={{cart,setCart,productsArray,state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default Context


