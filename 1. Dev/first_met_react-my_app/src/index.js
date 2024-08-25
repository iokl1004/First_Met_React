import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import Notification from './chapter_06/Notification';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkORLight from './chapter_14/DarkORLight';

const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter_14
root.render(
  <React.StrictMode>
    <DarkORLight />
  </React.StrictMode>,
  document.getElementById('root')
);

// chapter_13
// root.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_12
// root.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_11
// root.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_10
// root.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_09
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_08
// root.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_07
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_06
// root.render(
//   <React.StrictMode>
//     <Notification />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter_05
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter_04
// setInterval(()=> {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

// chapter_03
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Library />
//     <Clock />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();