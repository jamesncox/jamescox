import React, { useState, useEffect } from 'react';
import Pages from './pages';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

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
}

export default App;
