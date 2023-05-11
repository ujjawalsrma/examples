import  Navbar from "../components/navbar-mobile";
import NavPc from "../components/navbar-pc";
import { useEffect , useState } from "react";
import Head from "next/head";
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";
import store from "@/redux/store";




export default function App({ Component, pageProps:{ session, ...pageProps } }) {

////////

const [viewportSize, setViewportSize] = useState({
  width: undefined,
  height: undefined
});

useEffect(() => {
  function handleResize() {
    if (typeof window !== 'undefined') {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }

  if (typeof window !== 'undefined') {
    handleResize();
    window.addEventListener('resize', handleResize);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
  };
}, []);

////////

  // return 
  return (
    <>
    <Provider store={store}>
    <SessionProvider session={session}>
    <Head >
    <title>Anushka💕 </title>
    <meta property="og:title" content="My page title" key="title" />
    </Head>
    {viewportSize.width <= 800 ? <Navbar/> : <NavPc/>}

    
      <Component {...pageProps} />
    </SessionProvider>
    </Provider>
    </>
  )
}
