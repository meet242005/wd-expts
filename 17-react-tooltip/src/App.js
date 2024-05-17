import logo from './logo.svg';
import './App.css';

function ToolTip(props) {
  return (
    <div className="tooltip">
    {props.title} <div className="tooltiptext">{props.desc}</div>
  </div> 
  )
  
}
function App() {
  return (
    <div>
      Out of the most popular tools used for development, 
      <ToolTip title="React" desc="Developed by Facebook"/>&nbsp;
      is the best along with  <ToolTip title="Angular" desc="Developed by Google"/>.
    
    </div>
  );
}

export default App;
