import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './ScrollButtons.css'
import { ItemContainer } from './ItemContainer';
import { ScrollUpandDown } from './ScrollUpandDown';
import { MonitorsProvider } from '../contexts/MonitorsContext';
import Appcontainer from './Appcontainer';
export const hibaJelzes=["törött","hibás","sérült"];
export const joAjanlat=["helyett,HELYETT","áronalul","áron alul","ÁRON ALUL","ÚJ","új","jó ajánlat","olcsóbb","sérülésmentes","Bontatlan"]
AOS.init();

function App() {
  return (
    <MonitorsProvider>
      {process.env.A}
      <Appcontainer>
      <ScrollUpandDown></ScrollUpandDown>
      <ItemContainer></ItemContainer>
      </Appcontainer>
    </MonitorsProvider>
  );
}
export default App;
