import React, { useState} from 'react'
import './Popup.css'
import '../index.css'
import * as Components from './Components';
// import ('tailwindcss').Config
import { useFormik ,Field , Form } from 'formik';
import validationSchema from './validations';

function Popup(props) {
  const [signIn, toggle] = useState(true);
  const {handleSubmit , handleChange , handleBlur , values , errors , touched} = useFormik({
    initialValues: {
      email:"",
      password: "",
      passwordConfirm:"",
      phone:"",
      name:"",
      surname:"",
      emailL:"",
      passwordL:"",
    },
    onSubmit:(values)=>{
       console.log(values);
    },
    validationSchema,
  })
  return (props.trigger) ?(
    <div className='popup'>
        <div className='popup-inner'>
        <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
              <button className='absolute top-2 right-2 bg-orange-500 w-5 rounded-md text-white ' onClick={() => props.setTrigger(false) } >X</button>
                  <button className='absolute bottom-0 left-0 w-1/5 bg-turuncu text-white rounded-md text-xl' onClick={() => toggle(true)}>Login</button>
                  <Components.Form className='text-black' onSubmit={handleSubmit}>
                    <table >
                      <tbody>
                        <tr>
                          <td><Components.InputRegister name='name' type='text' onBlur={handleBlur} value={values.name}  onChange={handleChange} placeholder='Name' />{errors.name && touched.name && (<div className='text-xs text-red-700'>{errors.name}</div>)} </td>
                          <td><Components.InputRegister name='surname' type='text' onBlur={handleBlur} value={values.surname}  onChange={handleChange} placeholder='Surname' />{errors.surname && touched.surname && (<div className='text-xs text-red-700'>{errors.surname}</div>)}</td>    
                        </tr>
                        <tr>
                          <td><Components.InputRegister name='email' onBlur={handleBlur} value={values.email} onChange={handleChange}  placeholder='E-mail'/>{errors.email && touched.email && (<div className='text-xs text-red-700'>{errors.email}</div>)}</td>
                          <td><Components.InputRegister name='password' value={values.password} onChange={handleChange} type='password' placeholder='password' onBlur={handleBlur} />{errors.password && touched.password && (<div className=' relative m-0 text-xs text-red-700'>{errors.password}</div>)}</td>
                        </tr>
                        
                        <tr>
                          <td><Components.InputRegister name='phone' value={values.phone} type='text' onChange={handleChange} placeholder='Phone' onBlur={handleBlur} />{errors.phone && touched.phone && (<div className='text-xs text-red-700'>{errors.phone}</div>)}</td>
                          <td><Components.InputRegister name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} type='password' placeholder='password again' onBlur={handleBlur} />{errors.passwordConfirm && touched.passwordConfirm && (<div className='text-xs text-red-700'>{errors.passwordConfirm}</div>)}</td>
                        </tr>
                      </tbody>
                    </table>
                    
                      <Components.Title className='absolute top-11 text-3xl text-black'>Create Account</Components.Title>
                      <Components.Button className='absolute bottom-10 left-40 right-40 ' type='submit'>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
              <button className=' absolute top-2 right-2 bg-orange-500 w-5 rounded-md text-white ' onClick={() => props.setTrigger(false) } >X</button> <br/>
                   <Components.Form className='text-black'>
                       <Components.Input name='emailL' type='text' onBlur={handleBlur} value={values.emailL}  onChange={handleChange} placeholder='Name' />{errors.emailL && touched.emailL && (<div className='text-xs text-red-700'>{errors.emailL}</div>)}
                       <Components.Input name='passwordL' value={values.passwordL} onChange={handleChange} type='password' placeholder='password' onBlur={handleBlur} />{errors.passwordL && touched.passwordL && (<div className=' relative m-0 text-xs text-red-700'>{errors.passwordL}</div>)}
                       <Components.Title className='absolute top-16 text-3xl '>Sign in</Components.Title>
                       <Components.Button>Sigin In</Components.Button>
                   </Components.Form>
                   <button className='absolute bottom-0 right-0 text-md w-1/5 bg-turuncu text-white rounded-md' onClick={() => toggle(false)}>Register</button>
              </Components.SignInContainer>
          </Components.Container>

        </div>

    </div>
  ) : "";
}

export default Popup