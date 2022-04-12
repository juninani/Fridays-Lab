import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import RoutesWrapper from "Components/Routers/Routes"
let router:any = null

function App() {

  return (
  <Router>
    <BrowserRouter>
      <div>
        <Route path = "/" element = {RoutesWrapper}/>
      </div>
    </BrowserRouter>
  </Router>
  )
}
export default App;