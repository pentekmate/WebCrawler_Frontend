import { createContext, useState, useEffect, useContext } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useFirebase } from "../components/firebase/FirebaseConfig";
import { getAuth, signOut } from "firebase/auth";



const MonitorsContext = createContext()
function MonitorsProvider({ children }) {
  const [screenSize, setScreenSize] = useState(getCurrentScreenSize())
  const [array, setArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  const [lastElement, setLastElement] = useState(0)
  const [user, setUser] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [showLoading,setshowLoading]=useState(false)


  useFirebase()
  const db = getFirestore()
  const auth = getAuth();


  function getUser() {
    setUser(auth.currentUser)
    if (user !== null) {
      setUserEmail(user.email)
    }
  }
  useEffect(function () {
    getUser()
  }, [user, setUser])
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
  }, []);


  function getCurrentScreenSize() {
    return window.innerWidth;
  }
  async function fetchData() {
    let data = []
    try {
      const monitorsRef = collection(db, "monitors");
      const snapshot = await getDocs(monitorsRef)
      snapshot.docs.map((item) =>
        data.push({ ...item.data() })
      )
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setArray(data)
      setLastElement(data.length - 1)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentScreenSize())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])


  return (
    <MonitorsContext.Provider value={{
      screenSize, loading, array, scrolling, lastElement, setLastElement, user, setUser, auth, getUser, userEmail,
      showLoading,setshowLoading
    }}>
      {children}
    </MonitorsContext.Provider>
  )
}

function useMonitors() {
  const context = useContext(MonitorsContext)
  if (context === undefined) throw new Error("Hiba")
  return context
}

export { MonitorsProvider, useMonitors }