
import './App.css'

import { SignedIn, SignedOut, SignInButton, } from '@clerk/clerk-react';

import { useAuth, } from "@clerk/clerk-react";
import { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './pages/layouts/layout';
import Home from './pages/Home';




function App() {

  const { getToken } = useAuth();

  useEffect(() => {
    (async () => {
      if (window.location.hostname === 'localhost') {
        const token = await getToken()
        console.log("‼️‼️‼️ T O K E N ‼️‼️‼️")
        console.log(token)
      }

    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (<>
    <SignedOut>
      <div style={{
        display: "flex", flexDirection: "column", minHeight: "100svh",
        alignItems: 'center', justifyContent: "space-evenly"
      }}>

        <div style={{ textAlign: "center" }}>
          <h1> 💵 KVITTO TACK 💵</h1>
          <p>PRIVATBUDGETAPP</p>
        </div>


        <SignInButton >Logga in
        </SignInButton >
      </div>


    </SignedOut>
    <SignedIn>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </SignedIn>

  </>
  )
}

export default App


{/* <header>
      <SignedOut>

        <h1> 💵 KVITTO TACK 💵</h1>
        <p>PRIVATBUDGETAPP</p>
        <br />
        <SignInButton />


      </SignedOut>
      <SignedIn>
        <UserButton />
        Välkommen {user?.fullName}
      </SignedIn>
    </header> */}