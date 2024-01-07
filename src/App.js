import { useState } from 'react';
import './App.css';
import Tag from './components/Tag';
import Category from './components/Category';
import Counter from './features/Counter';

function App() {
  const [value, setValue] = useState(0)
  // Category içerisinde Product, Product içerisinde ProductDetail olacak ve Category ve Product da verileri gösterme ProductDetail de ise veride güncelleme işlemini yapıcaz. Bu componentler iç içe olacağı için elimizdeki veri ve bu veriyi işleyecek metodu bu tüm componentlere vermemiz lazım. Yani hemen yukarıda tanımladığımız state'i. Bu state'i sadece Category içerisinde de tanımlayabilirdik fakat Tag component'i de bu veriyi sadece listeleyeceği için ana en dış component olan App de tanımladık. Sonrasında bu state'i tüm componentlere parametre olarak vermemiz gerekir. Hangi component de neyi kullanacaksak onu veririz. Category component'ine hepsini veririz çünkü ProductDetail hem listeleme(value) hem de güncelleme(setValue) yapacağı için bu state özelliklerini veririz. Category den Product a Product dan ProductDetail'e verilecek. Bu state yönetimi çok zorlayıcı ve karışık olduğu için "Redux" gibi state yönetim araçlarını kullanırız.
  return (
    <div className="App">
      {/* <Category val={value} setVal={setValue}/>
      <Tag val={value}/> */}
      <Counter/>
    </div>
  );
}

export default App;
