import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import '../components/App.css';
import '../components/ScrollButtons.css'
import { ItemContainer } from '../components/ItemContainer';
import { ScrollUpandDown } from '../components/ScrollUpandDown';
import { MonitorsProvider } from '../contexts/MonitorsContext';
import Appcontainer from '../components/Appcontainer';
import UserSettings from '../components/UserSettings';


AOS.init();
function AppLayout()
{
    return (
        <MonitorsProvider>
          <Appcontainer>
          <UserSettings></UserSettings>
          <ScrollUpandDown></ScrollUpandDown>
          <ItemContainer></ItemContainer>
          </Appcontainer>
        </MonitorsProvider>
      );
}
export default AppLayout