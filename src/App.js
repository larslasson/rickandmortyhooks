import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import NavBar from './components/navigation';

export default function App(props) {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}