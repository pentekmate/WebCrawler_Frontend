import './registerLogin.css'
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMonitors } from '../contexts/MonitorsContext';
import { useState } from 'react';
import { useFirebase } from '../components/FirebaseConfig';
import { TailSpin } from 'react-loader-spinner';
function Register()
{
    
    useFirebase()
    const{auth,setUser}=useMonitors()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[checkErrorTimeOut,setCheckErrorTimeOut]=useState(false)
    let errorMessage=""
     function handleSubmit(e){
        setCheckErrorTimeOut(true)
        if(!email || !password){
            return
        }
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            setUser(userCredential.user);
            console.log(userCredential.user)
        })
        .catch((error) => {
            
            errorMessage= error.message
            setTimeout(() => {
                checkError();
              }, 1500);
           
        })
    }
    function checkError(){
        if(errorMessage)
        {
            alert(errorMessage)
        }
        else{
            alert("siker")
        }
        setCheckErrorTimeOut(false)
        
    }
    const navigate= useNavigate()
    return(
        <div  className="container-fluid vh-100 flex-column  d-flex justify-content-center align-items-center reg">
           <div  data-aos="fade-up" className='registerform d-flex flex-column align-items-center'>
           <form onSubmit={(e)=>handleSubmit(e)} className='d-flex flex-column justify-content-center mt-5'>
                    <label htmlFor="email">Emailcím</label>
                    <input
                    type="email"
                    id="email"
                    onChange={(e) =>{setEmail(e.target.value)}}  />

                    <label htmlFor="password">Jelszó</label>
                    <input
                    type='password'
                    required={true}
                    id="password"
                    onChange={(e) =>{setPassword(e.target.value)}}  />
                    {checkErrorTimeOut===true?
                    <div className='d-flex justify-content-center'>
                        <TailSpin
                        height='30'
                        width='100'
                        color="#12486b" />
                    </div>
                    :
                    <button className='regbutton'>
                    Regisztráció
                    </button>}
                </form>
            <button onClick={(e)=>{e.preventDefault();navigate(-1)}} className='backbutton'>
              <FiArrowLeft></FiArrowLeft> Vissza
            </button>
           </div>
      
        </div>
      
    )

}
export default Register