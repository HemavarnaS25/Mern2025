import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import Login from './components/FunctionalComponents/Login';
import UseState from './components/FunctionalComponents/Hooks/UseState';
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect';
import UseEffectAPI from './components/FunctionalComponents/Hooks/UseEffectAPI';
import UseEffectAPIimage from './components/FunctionalComponents/Hooks/UseEffectAPIimage';
import UseRef from './components/FunctionalComponents/Hooks/UseRef';
import UseReducer from './components/FunctionalComponents/Hooks/UseReducer';
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo';
import UseCallback from './components/FunctionalComponents/Hooks/UseCallback';
//import List from './components/FunctionalComponents/Hooks/List';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/"element={<Home />}></Route>
      <Route path="/about"element={<About />}></Route>
      <Route path="/gallery"element={<Gallery page="Gallery" image="SECE Logo" />}></Route>
      <Route path="/contact"element={<Contact />}></Route>
      <Route path="/useApi"element={<UseEffectAPI />}></Route>
      <Route path="/signup"element={<Signup />}></Route>
      <Route path="/login"element={<Login />}></Route>
      <Route path="/useState"element={<UseState />}></Route>
      <Route path="/useEffect"element={<UseEffect />}></Route>
      <Route path="/useimage"element={<UseEffectAPIimage />}></Route>
      <Route path="/use-ref" element={<UseRef/>}></Route>
      <Route path="/use-memo"element={<UseMemo />}></Route>
      <Route path="/use-callback" element={<UseCallback />}></Route>
      {/* <Route path="/list" element={<List />}></Route> */}
      <Route path="/usereducer"element={<UseReducer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;