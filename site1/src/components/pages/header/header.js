import React from 'react';
import house1 from "../../img/house1.svg";
import ErrorBoundry from "../../error/error-boundry";

const Header = () => {
    return (
        <ErrorBoundry>
            <header className="header">
                <div className="container">
                    <div className="menu d-flex">
                        <img src={house1} alt="logo" />
                        <ul className="right d-flex">
                            <li><a href="#poslug">Всі послуги</a></li>
                            <li><a href="#contact">Контакти</a></li>
                            <li className="tel"><a href="tel:0985131382">+38 098 513-13-82</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h1>Послуги Професійного ріелтора</h1>
                    <h3>Продаж нерухомості</h3>
                    <h3>Купівля нерухомості</h3>
                    <h3>Юридична допомога</h3>
                    <div className="btn"><a href="#popup">Оставить заявку</a></div>
                </div>
            </header>
    </ErrorBoundry>
    );
}
export default Header;