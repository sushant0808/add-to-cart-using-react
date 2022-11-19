
import React, { useContext, useState } from 'react'
import { NewContext } from '../context/newContext';

const ChildComponent = ({product}) => {  
    const [counter,setCounter] = useState(0);
    const {myCounter,setMyCounter} = useContext(NewContext);
    return (
      <div>
          {console.log('Counter',myCounter)}
          <button onClick={() => setMyCounter([...myCounter,product.id])}>Click</button>
      </div>
    )
}

export default ChildComponent