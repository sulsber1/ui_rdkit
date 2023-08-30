import { useState } from 'react'  
import ResultArea from './ResultArea';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios'



const testData = [{
  "id" : 1,
  "smile" : "COO",
  "score" : 100
},
 { "id" : 2,
  "smile" : "CCC",
 "score" : 50
},{
  "id" : 1,
  "smile" : "COO",
  "score" : 100
},
 { "id" : 2,
  "smile" : "CCC",
 "score" : 50
},{
  "id" : 1,
  "smile" : "COO",
  "score" : 100
},
 { "id" : 2,
  "smile" : "CCC",
 "score" : 50
},{
  "id" : 1,
  "smile" : "COO",
  "score" : 100
},
 { "id" : 2,
  "smile" : "CCC",
 "score" : 50
},{
  "id" : 1,
  "smile" : "COO",
  "score" : 100
},
 { "id" : 2,
  "smile" : "CCC",
 "score" : 50
},{
  "id" : 1,
  "smile" : "COO",
  "score" : 100
},
 { "id" : 2,
  "smile" : "CCC",
 "score" : 50
}]

function App() {
  const [buttonValue, setButtonValue] = useState('')
  const [smileData, setSmileData] = useState([] as any)
  const [checkValue, setcheckValue] = useState({ rdkit : false, cartridge : false, other : false})

  const handleClick = (e) =>{
    let value = {...checkValue}
    let answer = e.target.name
    setcheckValue(() => {
      return {...checkValue, [e.target.name] : !value[answer]}
    })
  }

  console.log(smileData)
  const getData = async () =>{
    const res = await axios.get("http://www.google.com")
    const {data} = res
    console.log("hello")
    console.log(data)
    setSmileData([
      ...smileData, ...testData
    ]);
    console.dir(smileData)
  }


  const hitAPI = async () => {
    const smile = smileData
    const value = {...checkValue}
    console.log(smile)
    console.log(value)
    // const res = await axios.get("stuff")

    // setSmileData(res.data)
  }

  return (
    <>
      <Box>
          <FormGroup className='header-container' sx={{ display: 'flex', flexDirection : 'row', border : 'solid', justifyContent : 'space-between'}}>
          <TextField sx={{width : '60%'}} id="outlined-basic" label="smiles" variant="outlined" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonValue(event.target.value);}}/>
            <FormGroup sx={{flexDirection: 'row', alignItems : 'row-end'}}>
              <FormControlLabel className='flex-center'control={<Checkbox />} label="rdkit" name="rdkit" onChange={handleClick}> </FormControlLabel>
              <FormControlLabel className='flex-center' control={<Checkbox />} label="Cartridge" name="cartridge" onChange={handleClick}></FormControlLabel>
              <FormControlLabel className='flex-center' control={<Checkbox />} label="Other" name="other" onChange={handleClick}></FormControlLabel>
            </FormGroup>
            <Button className='button-container' variant="contained" onClick={getData}>Search</Button>
          </FormGroup>

          <ResultArea className='flex' data={smileData}></ResultArea>


      </Box>

    </>
  )
}

export default App
