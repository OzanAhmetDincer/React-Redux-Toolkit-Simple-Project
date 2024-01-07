import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount, incrementByAmountAsync, decrementByAmountAsync, selectTick } from "../tickSlice";
import { useState } from "react";

export default function Counter() {
  // useSelector ile tickSlice içerisinde tanımladığımız slice'ın değerini okuyoruz
  const value = useSelector(selectTick);
  // "dispatch" ile tickSlice içerisinde tanımladığımız reducer'larımıza ulaşabiliriz ve metotları tetikleriz
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0)
  return (
    <>
      <div>
        <h3>Sayaç: <span className="text">{value}</span></h3>

        <label><b>Bir değer giriniz:</b></label>
        <input className="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>

        <br /><br />

        <button onClick={() => dispatch(decrement())} className="btn" style={{backgroundColor:"red"}}><h3>Azalt</h3></button>

        <button onClick={() => dispatch(increment())} className="btn" style={{backgroundColor:"darkgreen"}}><h3>Arttır</h3></button>
        <br /><br />

        <button onClick={() => dispatch(decrementByAmount({val:parseInt(amount)}))} className="btn" style={{backgroundColor:"orangered"}}><h3>{`${amount}`} kadar azaltır</h3></button>

        <button onClick={() => dispatch(incrementByAmount({val:parseInt(amount)}))} className="btn" style={{backgroundColor:"green"}}><h3>{`${amount}`} kadar arttırır</h3></button>
        <br /><br />

        <button onClick={() => dispatch(decrementByAmountAsync({val:parseInt(amount)}))} className="btn" style={{backgroundColor:"yellow"}}><h3>{`${amount}`} kadar asenkron azaltır</h3></button>

        <button onClick={() => dispatch(incrementByAmountAsync({val:parseInt(amount)}))} className="btn" style={{backgroundColor:"greenyellow"}}><h3>{`${amount}`} kadar asenkron arttırır</h3></button>

      </div>
    </>
  );
}
