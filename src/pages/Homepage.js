import { useNavigate } from "react-router-dom"
import './homepage.css'
function HomePage(){
    const navigate = useNavigate()
    return(
    <div className="container-fluid max-vh-100  hm">
        
        <div className="hover d-flex flex-column justify-content-center align-items-center">
            <h1 className="hmh1 ">Fedezz fel használt monitorokat.</h1>
            <p className="hmp">A bot segít neked..</p>
            <div className="hmbutton-container">
                <button className="hmbutton0" onClick={()=>navigate('/app')}>
                       Tovább az appra
                </button>
                <button className="hmbutton1" onClick={()=>navigate('/login')}>
                        Belépés
                </button>
        </div>
        </div>
 
         
    </div>
    )
}
export default HomePage