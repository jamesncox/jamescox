import React, { useState, useEffect } from 'react';
import Pages from './pages';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';
// import NavBar from './components/NavBar'

function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/jamesncox")
      .then(res => res.json())
      .then(user => {
        setUser(user)
      })
  }, [])

  if (!user) {
    return <div />
  }

  return <Pages user={user} />
  // let tabButtons = document.querySelectorAll(".tab-container .button-container button")
  // let tabPanels = document.querySelectorAll(".tab-container .tab-panel")

  // const showPanel = (panelIndex, colorCode) => {
  //   tabButtons.forEach(function (node) {
  //     node.style.backgroundColor = ""
  //     node.style.color = ""
  //   })
  //   tabButtons[panelIndex].style.backgroundColor = colorCode
  //   tabButtons[panelIndex].style.color = "white"

  //   tabPanels.forEach(function (node) {
  //     node.style.display = "none"
  //   })
  //   tabPanels[panelIndex].style.display = "block"
  //   tabPanels[panelIndex].style.backgroundColor = colorCode
  // }

  // showPanel(0, '#f44336')

  // return (
  //   <Router>
  //     <div className="App">

  {/* <div className="tab-container">
          <div className="button-container">
            <button onClick={showPanel(0, '#f44336')}> Tab 1</button>
            <button onClick={showPanel(1, '#4caf50')}> Tab 2</button>
            <button onClick={showPanel(2, '#2196f3')}> Tab 3</button>
            <button onClick={showPanel(3, '#ff5722')}> Tab 4</button>
          </div >
          <div className="panel-content">Tab 1:content</div>
          <div className="panel-content">Tab 2:content</div>
          <div className="panel-content">Tab 3:content</div>
          <div className="panel-content">Tab 4:content</div>
        </div > */}



  {/* <NavBar /> */ }
  {/* <header className="App-header">
          <h1>James Cox</h1>
        </header> */}
  //     </div >
  //   </Router >
  // );
}

export default App;
