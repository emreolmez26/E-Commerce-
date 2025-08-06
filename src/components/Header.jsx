import React, { use } from 'react'
import '../css/Header.css'; // Importing the CSS file for styling
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state



function Header() {

    const [theme, setTheme] = useState(false);
    const {products} = useSelector((store) => store.basket); // storeun içinden sepeti alıyoruz


    const navigate = useNavigate();

    const changeTheme = () => {
        // Theme change logic here
        const root = document.getElementById('root');
        setTheme(!theme);
        if (!theme) {
            root.style.backgroundColor = 'black';
            root.style.color = '#fff';
        } else {
            root.style.backgroundColor = '#fff';
            root.style.color = 'black';
        }

    }


  return (
    <div style={{display: 'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row' onClick={()=> navigate("/")}>
            <img className='logo' src="./src/images/logo.jpg" alt="Logo" />
            <p className='logo-text'>EMRE A.Ş.</p>
        </div>
        <div className='flex-row'>
            <input type="text" className='input-text' placeholder='Bir şeyler ara..'/>
            <div>
                {theme ? <FaMoon className='icon' onClick={changeTheme}/> : <CiLight className='icon' onClick={changeTheme}/>}
                    <Badge  badgeContent={products.length} color="error">
                       <CiShoppingBasket  className='icon'/>
                    </Badge>
            </div>
        </div>
    </div>
  )
}

export default Header