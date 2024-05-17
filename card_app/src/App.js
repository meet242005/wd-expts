import 'bootstrap';
import './App.css';
import {React, useState,useEffect} from 'react';


function App() {
  
  const [isloaded,loadData] = useState(false);
  const [description, showDescription] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{loadData(true)},3000)
  },[])

  function hide()
  {
    document.getElementsByTagName('h1')[0].style.visibility = "hidden"
    showDescription(true)
  }

  if (isloaded==true) {
    return (
      <div class="container">
          <div class="content">
              <h1 onClick={()=>hide()}>Blog Post Title</h1>
              <hr/>
              
              {description?
              (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam, neque excepturi necessitatibus totam tempora eaque voluptates error minima iste ipsam officia quasi deserunt enim quae itaque voluptatum corrupti cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatibus sequi tempora necessitatibus? Modi aut, ipsam necessitatibus porro inventore consequatur animi nihil, deserunt voluptates hic voluptatum adipisci sit? Nobis, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ducimus deserunt sit mollitia totam animi et nam ad, minus maiores magni eos, praesentium eaque adipisci dolorum quo temporibus doloremque ea.</p>)
              :('')}
          </div>
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
