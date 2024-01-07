// Bu dosyayı tüm componentlerimiz kullanabilir. store içerisine konulacak olan reducer'ları tutan bir dosya

import {createSlice} from "@reduxjs/toolkit"

// Bir Slice oluşturulacağı zaman "name" yani store'da oluşturduğumuz tickSlice.js nin ismi ve "initialState" yani başlangıç değeri verilir. Sonrasında reducer'larımızı tanımlarız. Oluşturduğumuz değişken(name'i tick başlangıç değeri sıfır olan) üzerinde yapılacak tüm eylemleri "reducer" içerisinde tanımlarız. Şuan bizim örneğimizde sayı değişkenimizin değerinin arttırılıp azaltılması ile ilgili işlemleri tanımlayacaz. Bu reducer içerisinde ki tanımlamalarda her biri ayrı bir metotdur.
export const tickSlice = createSlice({
    name: "tick",
    initialState:{
        value : 0,
    },
    reducers: {
        increment:(state)=>{
            state.value++
        },
        decrement:(state)=> {
            state.value--;
        },
        incrementByAmount: (state, action)=>{
            console.log("state", state);
            console.log("action", action);
            state.value += action.payload.val;
        },
        decrementByAmount: (state, action)=>{
            console.log("state", state);
            console.log("action", action);
            state.value -= action.payload.val;
        }
    }
});
export const {increment, decrement, incrementByAmount, decrementByAmount}=tickSlice.actions;// tickSlice içerisinde ki actions fonksiyonlarını increment ve decrement ismiyle dışarı açtık. Redux tarafından yapılmış her eylemi  bu reducer'lara gönderiyoruz. Eylemleri dispatch edip reducer'lara göre action tiplerini belirtiyoruz(increment,decrement)

export const selectTick = state => state.tick.value;

export default tickSlice.reducer;// Slice'nin ürettiği reducer'ı dışarı açtık çünkü reducer'lar üzerinden işlem yapıcaz, bunlara veri göndericez. Varsayılan olarak bunu döndürür


export const incrementByAmountAsync = payload =>dispatch =>{
    setTimeout(()=>{
        dispatch(incrementByAmount(payload))
    },2000);
}

export const decrementByAmountAsync = payload =>dispatch =>{
    setTimeout(()=>{
        dispatch(decrementByAmount(payload))
    },2000);
}


