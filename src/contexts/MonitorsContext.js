import { createContext,useState,useEffect, useContext } from "react";
import {getFirestore,collection,getDocs} from 'firebase/firestore'
import { useFirebase } from "../components/FirebaseConfig";
const MonitorsContext=createContext()
function MonitorsProvider({children})
{
    const [screenSize,setScreenSize]=useState(getCurrentScreenSize())
    const [array,setArray]=useState([])
    const [loading,setLoading]=useState(false)
    const [scrolling, setScrolling] = useState(false);

    useFirebase()
    const db=getFirestore()

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [window.scrollY]);
 
    
    function getCurrentScreenSize()
    {
      return window.innerWidth;
    }
   async function fetchData()
    {
      let data=[]
      try{
        const monitorsRef = collection(db, "monitors");
        const snapshot = await getDocs(monitorsRef)
        snapshot.docs.map((item)=>
        data.push({...item.data()})
        )
      }
      catch(e)
      {
        console.log(e)
      }
      finally{
        setArray(data)
      }
    }
    useEffect(()=>{
      fetchData()
    },[])
    useEffect(() => {
        const updateDimension = () => {
          setScreenSize(getCurrentScreenSize())
        }
        window.addEventListener('resize', updateDimension);
        
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
      }, [screenSize])
    
    return(
        <MonitorsContext.Provider value={{
            screenSize,loading,array,scrolling
        }}>
            {children}
        </MonitorsContext.Provider>
    )
}

function useMonitors()
{
    const context=useContext(MonitorsContext)
    if(context===undefined)throw new Error("Hiba")
    return context
}

export{MonitorsProvider,useMonitors}