import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './ScrollButtons.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import AppLayout from '../pages/AppLayout';
import LoginPage from '../pages/LoginPage';
import PagenotFount from '../pages/PagenotFound';
import Register from '../pages/Register';
import { MonitorsProvider } from '../contexts/MonitorsContext';
export const hibaJelzes=["törött","hibás","sérült"];
export const joAjanlat=["helyett,HELYETT","áronalul","áron alul","ÁRON ALUL","ÚJ","új","jó ajánlat","olcsóbb","sérülésmentes","Bontatlan"]
AOS.init();

function App() {
  return (
  <MonitorsProvider>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="WebCrawler_Frontend" index element={<HomePage></HomePage>}></Route>
      <Route path="/app" element={<AppLayout></AppLayout>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/regist" element={<Register></Register>}></Route>
      <Route path="/*" element={<PagenotFount></PagenotFount>}></Route>
    </Routes>
   </BrowserRouter>
   </MonitorsProvider>
  );
}
export default App;
