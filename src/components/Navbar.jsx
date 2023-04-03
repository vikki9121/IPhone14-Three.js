import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const NavBar = () => {
    return (
        <nav className='nav-wrapper'>
            <div className="nav-content">
                <ul className="list-styled">
                    <li><img src={Logo} alt="Apple" /></li>
                    <li><a href="https://www.apple.com/in/store" className='link-styled'>Store</a></li>
                    <li><a href="https://www.apple.com/in/mac/" className='link-styled'>Mac</a></li>
                    <li><a href="https://www.apple.com/in/ipad/" className='link-styled'>iPad</a></li>
                    <li><a href="https://www.apple.com/in/iphone/" className='link-styled'>iPhone</a></li>
                    <li><a href="https://www.apple.com/in/watch/" className='link-styled'>watch</a></li>
                    <li><a href="https://www.apple.com/in/airpods/" className='link-styled'>AirPods</a></li>
                    <li><a href="apple.com/in/tv-home/" className='link-styled'>Tv & Home</a></li>
                    <li><a href="https://www.apple.com/in/services/" className='link-styled'>Entertainment</a></li>
                    <li><a href="https://www.apple.com/in/shop/accessories/all" className='link-styled'>Accesspries</a></li>
                    <li><a href="https://support.apple.com/en-in" className='link-styled'>Support</a></li>
                    <li><img src={Search} alt="search" /></li>
                    <li><img src={Store} alt="store" /></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default NavBar