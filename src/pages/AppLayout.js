import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/App.css';
import '../components/ui/ScrollButtons.css'
import { ItemContainer } from '../components/containers/ItemContainer';
import { ScrollUpandDown } from '../components/ui/ScrollUpandDown';
import { MonitorsProvider } from '../contexts/MonitorsContext';
import Appcontainer from '../components/containers/Appcontainer';
import UserSettings from '../components/user/UserSettings';



AOS.init();
function AppLayout() {
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