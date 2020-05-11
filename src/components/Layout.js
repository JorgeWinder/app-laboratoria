import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useLocation } from "react-router-dom";

export default function Layout(props) {

    // const url = new URL(document.referrer);
    // console.log(url.pathname);
    const location = useLocation();
    // console.log(location.pathname)

    return (
        <div>
            {location.pathname !== "/" && (<Navbar />) }
            {props.children}
            {location.pathname !== "/" && (<Footer />) }
            
        </div>
    )
}
