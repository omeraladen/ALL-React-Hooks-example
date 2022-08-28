import  ReactDOM  from "react-dom/client";
import App from "./App"; // main rendered App connected with index.html
import './index.css' // Global Style css


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App/>);