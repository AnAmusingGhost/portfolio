import React from 'react';
import "./sidebar.css"; 
import Logo from '../../assets/logo.svg'

const SideBar = () => {

    return(
        <aside className="aside">
            <a href="#home" className="nav__logo">
                <img src={Logo} alt=""/>
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                       <li className="nav__item">
                        <a href="#home" className="nav__link">
                        <i class="icon-home"></i>
                        </a>
                        </li> 

                        <li className="nav__item">
                        <a href="#about" className="nav__link">
                        <i class="icon-user-following"></i>
                        </a>
                        </li> 

                        <li className="nav__item">
                        <a href="#resume" className="nav__link">
                        <i class="icon-graduation"></i>
                        </a>
                        </li> 

                        <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                        <i class="icon-layers"></i>
                        </a>
                        </li> 
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright"> 
                    &copy; 2024
                </span>
            </div>
        </aside>
    )
}

export default SideBar;