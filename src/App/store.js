import { configureStore } from "@reduxjs/toolkit";
import tickReducer from "../features/tickSlice";// "tickSlice" dan default olarak reducer döndüğü için "tickReducer" olarak isimlendirdik.

//Bu fonksiyon ile bir store oluşturacaz ve bunu dışarı açıcaz. Aşağıda tanımladığımız "reducer" nesnesi içerisinde oluşturulacak store'umuzun tutacağı reducer'ları tanımlayacaz. Aşağıda da tanımlayabiliriz fakat daha düzenli bir yapı oluşması için başka bir dosyada bunları tanımlayıp o dosyayı reducer olarak vericez
// Aşağıda tick isminde bir değişken tanımladık. Bu değişken obje, dizi, int, string gibi bir değişken olabilir. Bu değişkene tickSlicer'den dönen reducer'i bağladık(tickReducer)
export default configureStore({
  reducer: {
    tick : tickReducer
  }
});
