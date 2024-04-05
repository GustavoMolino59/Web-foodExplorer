

import React, { useState, createContext, useContext } from 'react';

export const OrderContext = createContext({});


function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);



  function handleOrders(order){
    setOrders([...orders, order]);
    
  }
  
  return (
    <OrderContext.Provider value={{ orders, handleOrders }}>
      {children}
    </OrderContext.Provider>
  );
} 


function useOrders(){
    const context = useContext(OrderContext)

    return context
}


export{OrderProvider, useOrders}
