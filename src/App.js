import React from 'react';
import Profile from './Components/Profile'

function App() {
  const style={
    display: "flex",
    justifyContent: "center",
    paddingTop: "31px"

    
  }
  function getData(){
    alert ("Hello Marwen Jammeli");
  }
  return (
    <div style={style}>
      
      <Profile 
        name= 'Marwen Jammeli'
        bio= 'No pain No gain'
        profession= 'Full Stack JS Junior'
        data={getData}>
        <img src="Images/Marwen.jpg"  alt="Profile" style={{width: "100%"}}/>
        
          
          </Profile>
    </div>
  );
}

export default App;
