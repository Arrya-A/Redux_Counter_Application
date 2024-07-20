import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByRange, reset } from './redux/counterSlice'
import { useState } from 'react'

function App() {
  const [range, setRange]= useState("")
  // hook to call the action
  const dispatch=useDispatch()
  // useSelector - to access the data
  const count= useSelector((state)=>state.counterReducer.value)

  console.log(range);
  const handleIncrement=()=>{
    if(!range){
      alert('Please enter a value')
    }
    else{
      dispatch(incrementByRange(Number(range)))
    }
  }

  return (
    <>
      <div style={{backgroundColor:'black', height:'100vh', width:'100%'}} className='d-flex justify-content-center align-items-center'>
        <div style={{ width:'500px'}} className='bg-light p-5 rounded'>
            <h3 className='text-primary text-center'>Counter Application</h3>
            <h1 className='text-center my-5' style={{fontSize:'100px'}}>{count}</h1>
            <div className='d-flex justify-content-around'>
              <button className='btn btn-success p-3' onClick={()=>dispatch(increment())}>Increment</button>
              <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
              <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
            <div className='d-flex mt-5'>
              <input type="text" placeholder='Range' className='form-control' onChange={(e)=>setRange(e.target.value)}/>
              <button className='btn btn-primary p-3 ms-3' onClick={handleIncrement} >Increment by Range</button>
            </div>
        </div>
      </div> 
    </>
  )
}

export default App
