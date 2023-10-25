import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './registerLogin.css'
import { useFirebase } from "../components/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner';
import { useMonitors } from "../contexts/MonitorsContext";
function LoginPage(){
   
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[checkErrorTimeOut,setCheckErrorTimeOut]=useState(false)
    const{user,setUser}=useMonitors()
    const [isError,setIsError]=useState(false)
    const [errorDisplayMessage,setErrorDisplayMessage]=useState("")
    let errorMessage=""


    const auth = getAuth();
    const navigate= useNavigate()
    useFirebase()


   async function handleSubmit(e){
        setCheckErrorTimeOut(true)
        e.preventDefault()
        if(!email || !password){
            setErrorDisplayMessage("Üresen hagyott mezők.")
            return
        }
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
            console.log(user)
            // ...
        })
        .catch((error) => {
            errorMessage= error.message
            setTimeout(() => {
                checkError();
              }, 1500);    
    })}
     function checkError(){
        if(errorMessage)
        {
           setIsError(true)
           setErrorDisplayMessage(errorMessage)
        }
        else{
           navigate('/app')
        }
        setCheckErrorTimeOut(false)
        
    }
    useEffect(function(){
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
            const uid = user.uid;
            navigate('/app')
            }
          });
    },[user])

    return(
        <div  className="container-fluid vh-100 flex-column  d-flex justify-content-center align-items-center log">
        <div  data-aos="fade-up" className='loginform d-flex flex-column align-items-center'>
        <form onSubmit={(e)=>handleSubmit(e)} className='d-flex flex-column justify-content-center mt-5'>
                 <label htmlFor="email">Emailcím</label>
                 <input
                 type='email'
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
                 <button className='loginbutton'>
                     Belépés
                 </button>
                   }
             </form>
         <p className='logp'>Elfelejtetted a jelszavad? Kattints <span className='logspan'>ide</span>!</p>
         <p className="loguser">Nincs fiókod?</p>
         <button className="Loginregbutton" onClick={(e)=>{e.preventDefault();navigate("/regist")}}><p className="logCreateuser">Fiók létrehozása</p></button> 
         <button onClick={(e)=>{e.preventDefault();navigate(-1)}} className='backbutton'>
           <FiArrowLeft></FiArrowLeft> Vissza
         </button>
         {
            isError &&
            <div className='errordiv d-flex align-items-center'>
                {errorDisplayMessage}
            </div>
            }
        </div>
   
     </div>
    )
}
export default LoginPage