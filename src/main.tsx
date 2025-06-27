import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import MainSite from './components/MainSite'

const App = () => {
return (
  <div id="app">
    <MainSite />
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('app'));