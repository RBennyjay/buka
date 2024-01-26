import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './index.css';
import App from './App'; //this is a component
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

import Table from  './components/Table';

import logo from './logo.svg'


const root = ReactDOM.createRoot(document.getElementById('root'));

// let name = "Adetayo"

// location.render(<h2> Welcome to my site {name} </h2>)

// const msg = <h2> Welcome to my site </h2>

// root.render(
//   <React.StrictMode>
//   {msg} 
//   </React.StrictMode>
//   );

  // root.render(<h2> Welcome to my site </h2>)

  // location.render(<h2> Welcome to my site </h2>)


  // const root = ReactDOM.createRoot(document.getElementById('root'));

  // banner.render(<p>This is the banner </p>)



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// var appname = "DevConf";

// const banner =  ReactDOM.createRoot(document.getElementById('banner'));

// // let bgimage = "bg.jpg";
// let obj = {
//   border:"6px solid teal", 
//   backgroundColor:"grey"
//   // backgroundImage: `url(${bgimage})`
// };



// banner.render(
//   <>
//   <h1> You are Welcome </h1>
//     <img className='img-fluid' style={obj} src={logo} onClick={function(){alert('Hello')}}/>
    
// </>
// );

// banner.render(
//   <div>
//   <h1> Welcome Home</h1>
//    <img className='img-fluid' style={{border:"6px solid green"}} src={logo} onClick={function(){alert('Hello')}}/>
   
//   </div>
// );


// const news =  ReactDOM.createRoot(document.getElementById('news'));

// news.render(
//   <Table/>
  // <table className='table table-striped'>
  //   <tr>
  //     <th>S/N </th>
  //     <th>Name</th>
  //   </tr>
  //   <td>1 </td>
  //   <td> Danie Cole </td>
  // </table>
  // );