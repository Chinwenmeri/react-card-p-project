import { useState } from 'react'
import Cards from './components/Cards'
import { sculptureList } from './assets/data'
import './App.css'

function App() {
  const [data, setData] = useState(sculptureList)

  return (
    <>
    <Cards cards={data}/>
    </>
  )
}

export default App
