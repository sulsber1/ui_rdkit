import { useState } from 'react'  
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Form() {
  const [count, setCount] = useState(0)

  function submitting(e) {
    e.preventDefault();
    console.dir(value)
  }

  return (
    <>
      <div className='flex'> Enter a Smiles String
      <form action="/" onSubmit={submitting}>
        <div>
          <label htmlFor="smiles"></label>
          <input type="text" className="flex-center" id="smiles"/>
        </div>
        <div>
          <label htmlFor="rdkit">Rdkit</label>
          <input type="checkbox" className="flex-center" id="rdkit"/>
          <label htmlFor="cartridge">Cartridge</label>
          <input type="checkbox" className="flex-center" id="cartridge"/>
          <label htmlFor="other">Other</label>
          <input type="checkbox" className="flex-center" id="other"/>
        </div>
        <button>Submit</button>
      </form>
      </div>
    </>
  )
}

export default App
