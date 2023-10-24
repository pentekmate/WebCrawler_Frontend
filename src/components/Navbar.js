import { useMonitors } from '../contexts/MonitorsContext'
import './Navbar.css'
function Navbar()
{
    const {scrolling}=useMonitors()
    return (
    <nav className={`navbar navbar-expand-lg  d-none  d-xl-block  ${scrolling? 'navbar-show':'navbar-top'}`}>
        <div className="container-fluid d-flex justify-content-end">
            <ul className="navbar-nav">
                <li className="nav-item">
                   <button type="button" className='login-button'>
                       Belépés
                   </button>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Navbar