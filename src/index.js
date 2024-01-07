import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux"
import store from './App/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// Uygulama ayağa kalktığında oluşturduğumuz store.js dosyasının çalışması ve redux'ı kullanabilmek için uygulamamızı(App), "react-redux" kütüphanesinden gelen "Provider" componenti ile sarmamız yani içerisine almamız gerek. Bu componente de property olarak oluşturduğumuz "store" dosyasını veririz.
reportWebVitals();
