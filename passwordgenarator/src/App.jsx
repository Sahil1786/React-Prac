import { useState,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [NumAllowd, setNumAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //use ref hook
  const passwordRef=useRef(null)

  const passwordGenarator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(NumAllowd) str+="0123456789";
    if(charallowed) str+="~!@#$%^&*()_+`?<>";
    for(let i=0;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setpassword(pass);

  },[length,NumAllowd,charallowed,setpassword])

  useEffect(()=>{
    passwordGenarator();
  },[length,NumAllowd,charallowed,passwordGenarator])
  const copyPasswordToClicpboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])
 


  return (
    <>
<div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>

  <input type="text" value={password}
  className='outline-none w-full py-1 px-3'
  placeholder='password '
  readOnly ref={passwordRef}/>
  <button onClick={copyPasswordToClicpboard}>copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer'onChange={(e)=>{setlength(e.target.value)}}/>
      <label>Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input type="checkbox"defaultChecked={NumAllowd} id='numallowed ' onChange={()=>{
setNumAllowed((prev)=>!prev)
    }}/> <label htmlFor='numallowed'>number</label>
      
    </div>
    <div className='flex items-center gap-x-1'>
    <input type="checkbox"defaultChecked={charallowed} id='charallowed ' onChange={()=>{
setCharAllowed((prev)=>!prev)
    }}/> <label htmlFor='charallowed'>char</label>
      
    </div>
  </div>
</div>


    </>
  )

  }
export default App
