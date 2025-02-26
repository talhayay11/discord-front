const { useState } = window.React;
const { createRoot } = window.ReactDOM;

function Discort() {
 const [message, setMessage] = useState("Hoş geldin!");

 // onClick={window.location.reload()}
 return (
  <div className="Discort">
   <div className= "side">
    <img src= "images\ds.png" alt="ds" className="side-ds"></img>
   </div>

   <div className= "sidebar"></div>
  </div>
 );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Discort />);