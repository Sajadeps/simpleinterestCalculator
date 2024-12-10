import { useState } from 'react'
import './App.css'
import { TextField, Stack, Button } from '@mui/material'


function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [invalidPrinciple,setInavalidPrinciple] = useState(false)
  const [invalidRate,setInavalidRate] = useState(false)
  const [invalidYear,setInavalidYear] = useState(false)




  const validateInput =(inputTag) =>{
    console.log(inputTag);
    const {name, value} = inputTag
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInavalidPrinciple(false)
      }else{
      setInavalidPrinciple(true)
      }
    }else if(name == "rate"){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInavalidRate(false)
      }else{
        setInavalidRate(true)
      }
    }else if(name == 'year'){
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInavalidYear(false)
      }else{
      setInavalidYear(true)
      }
     
    }
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("please fill the form completely")  
    }
  }
  const handleReset = () =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInavalidPrinciple(false)
    setInavalidRate(false)
    setInavalidYear(false)
  }

  return (
    <>
     <div style={{width:'100%', minHeight: '100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'40%'}} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your Simple Interest Easily !</p>
        <div className='bg-warning p-5 rounded text-center'>
          <h3>₹ {interest}</h3>
          <p className='fw-bolder'>Total Simple interest</p>
        </div>
        <div>
          <form className='mt-5'>
            {/* Principle amount */}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>
            {/* for invalid principle */}
            {invalidPrinciple &&  <div className='text-danger fw-bolder mb-3'>
              Invalid Principle Amount
            </div>}
            {/* Rate */}
            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* for invalid rate */}
            {invalidRate &&  <div className='text-danger fw-bolder mb-3'>
              Invalid Principle Amount
            </div>}
            {/* Year */}
            <div className='mb-3'>
              <TextField  value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="₹ Time Period (yr)" variant="outlined" />
            </div>
            {/* for invalid year */}
            {invalidYear &&  <div className='text-danger fw-bolder mb-3'>
              Invalid Principle Amount
            </div>}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled = {invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%', height: '70px'}} className='bg-dark'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{width:'50%', height: '70px'}} className='border border-dark text-dark'>Reset</Button>
            </Stack>
              
            
          </form>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
