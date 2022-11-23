import { useState } from 'react'
import './App.css'

function App() {
   const [state, setstate] = useState(false)
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=goma&appid=a19112774097394e46694054a1d240f7')
    .then(data => data.json()).then(data => {
      const array = [...data.list]
      
      return setstate(array.map(value => {
       return value.wind.deg
     }))
    }
      
  )
  

  return (
    <div className="App">
      
     
        { state ?  <ul><li className='main'>{state}</li>  </ul>: "loading...." }
     
     
    </div>
  )
}

export default App
 