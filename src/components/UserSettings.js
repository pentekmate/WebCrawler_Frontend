import { useNavigate } from "react-router-dom"
import { useMonitors } from "../contexts/MonitorsContext"
import { signOut } from "firebase/auth";
import './userSettings.css'
function UserSettings(){
    const{user,userEmail,auth}=useMonitors()
    function logOut(){
        signOut(auth).then(() => {
          navigate("/")
        }).catch((error) => {
          alert(error)
        });
      }
    const navigate= useNavigate()
if(!user)
return (
    <div data-aos="fade-up" className="container mt-5 mb-5 d-flex flex-column align-items-center">
        <div className="usersettings mb-3 ">
            <p>Már van fiókod?</p>
            <button className="usersettingsButton" onClick={()=>navigate('/login')}>Belépés</button>
        </div>
        <p className="usersettingsp">Ha még nincs hozz létre egyet <span className="usersettingsSpan" onClick={()=>navigate('/regist')}>Itt</span>!</p>
    </div>
)
return(
    <div data-aos="fade-up" className="container mt-5 mb-5 d-flex flex-column align-items-center">
    <div className="usersettings mb-3 ">
        <p>Üdv itt!</p>
        <p>{userEmail}</p>
    </div>
    <div className="bg-dark">
        <button className="usersettingsLogoutButton"  onClick={()=>logOut()}>Kilépés</button>
    </div>
   
    </div>
)
}
export default UserSettings