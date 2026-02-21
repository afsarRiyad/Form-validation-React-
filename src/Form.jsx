import React, { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";

const Form = () => {
        
   const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:'',
      confirm:'',
   })
   const [errors, setErrors] = useState({})
    const [show, setShow] = useState(false)
    const [showw, setShoww] = useState(false)
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


 const validate = () =>{
   let newErrs = {}
   
    if(!formData.name){
      newErrs.name ='Please Enter Your Name'
    }

    if(!formData.email){
      newErrs.email ='Email is required'
    }else if(!emailRegex.test(formData.email)){
     newErrs.email ='Please enter a valid email'
    }
    
    if(!formData.password){
      newErrs.password ='Please Enter Your Password'
    }else if(!passRegex.test(formData.password)){
      newErrs.password = 'Password must have uppercase, lowercase, number, symbol and at least 8 characters'
    }

    if(!formData.confirm){
      newErrs.confirm ='Please Confirm Your Password'
    }else if(formData.password != formData.confirm){
      newErrs.confirm= 'Passwords do not match'
    }
    
    setErrors(newErrs)
    return Object.keys(newErrs).length === 0
 }

   const handleSubmit = (e) => {
      e.preventDefault()
      if(validate()) {
      console.log(formData)
      }
   }
  return (
    <>
    <form action="" onSubmit={handleSubmit} className='mt-9 mx-auto border rounded border-green-200'>
        <div className="head text-red-50 bg-green-500 font-semibold py-4 text-center">
            <h2>Registration Form</h2>
        </div>
        <div className="flex flex-col ">
            <label className='pt-3 ps-5 text-sm'>Username</label>
         <input type="text" onChange = {(e)=>setFormData({...formData, name:e.target.value})} placeholder="John Smith" className='border rounded  border-gray-300  px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500  mx-3' />
         {errors.name && <span className="text-red-500 ps-5 text-sm">{errors.name}</span>}

            <label className='pt-3 ps-5 text-sm '>Email</label>
         <input type="email" onChange = {(e)=>setFormData({...formData, email:e.target.value})} placeholder="john398@gmail.com" className='border rounded  border-gray-300  px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500 mx-3' />
         {errors.email && <span className="text-red-500 ps-5 text-sm">{errors.email}</span>}

           <div className="flex flex-col pass ">
             <label className='pt-3 ps-5 text-sm '>Password</label>
         <input type={show? 'text' : 'password'} onChange = {(e)=>setFormData({...formData, password:e.target.value})} placeholder="Askdrjf%$235EDF" className='border rounded  border-gray-300  px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500  mx-3' /> 
         <div onClick={()=> setShow(!show)}>
           {show ?   <FaEye className='hide'/> :<FaEyeLowVision className='hide'/> }
         </div>
         {errors.password && <span className="text-red-500 ps-5 text-sm">{errors.password}</span>}
           </div>
        
          <div className="flex flex-col pass ">
            <label className='pt-3 ps-5 text-sm '>Confirm Password</label>
         <input type= {showw ? 'text' : 'password'} onChange = {(e)=>setFormData({...formData, confirm:e.target.value})} placeholder="Askdrjf%$235EDF" className='border rounded  border-gray-300  px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500  mx-3' />
          <div onClick={()=> setShoww(!showw)}>
           {showw ?   <FaEye className='hide'/> :<FaEyeLowVision className='hide'/> }
         </div>
         {errors.confirm && <span className="text-red-500 ps-5 text-sm">{errors.confirm}</span>}
         </div>

          <div className="head mt-4 text-red-50 bg-green-500 font-semibold py-2.5 text-center">
            <button  type="submit"className='cursor-pointer border border-blue-100 px-4 py-1.5 rounded'>Submit</button>
        </div>
        </div>
    </form>
    </>
  )
}

export default Form