import 'bootstrap';
import './App.css';
import image1 from './Waves/Deep Purple.jpg'
import {React, useState,useEffect} from 'react';

function App() {
  
  const [isloaded,loadData] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{loadData(true)},3000)
  },[])

  function hide()
  {
    document.getElementsByTagName('h1')[0].style.visibility = "hidden"

  }
  function Card(props){
    return  (
    <div class="container">
      <img src={image1}/>
      <div class="content">
          <h1 onClick={()=>hide()}>{props.title}</h1>
          <hr/>
          
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam, neque excepturi necessitatibus totam tempora eaque voluptates error minima iste ipsam officia quasi deserunt enim quae itaque voluptatum corrupti cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      
      </div>
    </div>)
  
  }

  if (isloaded==true) {
    return (
      <div class="wrapper">
      <Card title="sometitle"/>
      <Card title="sometitle1"/>
      <Card title="sometitle2"/>
      <Card title="sometitle4"/>
      </div>
    );
  }
  else{
  return (
    <div class="container">   
        <div class="loader">
          
        </div>
    </div>
  );
}
}

export default App;
