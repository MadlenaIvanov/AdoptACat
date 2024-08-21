import { useState, useEffect } from "react";
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselDash from "../Carousel/Carousel";



const Dashboard = () => {

    const [show, toggleShow] = useState(false);

    return(
        <section id="dashboard-page" className="dashboard">
            <h3><span>PAWSITIVE CAT-TITUDE </span></h3>
            <hr size="10" width="50%" color="black" />

            <section id="my-pets-page" className="my-pets">
                <h2 id="find-and-adopt">😻Find and adopt your new best friend😺</h2>
                <ul className="my-pets-list">
                    <li className="otherPet">
                        <img src="/images/cat1.jpg" />
                        <p>
                            <div>
                                <button onClick={() => toggleShow(!show)}> Information: {show ? '⮝' : '⮟'}</button>
                                {show && <div>Name: Poppy, Age: 5, Varna</div>}
                            </div>
                        </p>
                        {/* <a className="button" href="#">Details</a> */}

                    </li>

                    <li className="otherPet">
                        <img src="/images/cat1.png" />
                        <p>
                            <div>
                                <button onClick={() => toggleShow(!show)}> Information: {show ? '⮝' : '⮟'}</button>
                                {show && <div>Name: Alan, Age: 1.2, Sofia</div>}
                            </div>
                        </p>
                        {/* <a className="button" href="#">Details</a> */}
                    </li>
                    <li className="otherPet">
                        <img src="/images/cat2.png" />
                        <p>
                            <div>
                                <button onClick={() => toggleShow(!show)}> Information: {show ? '⮝' : '⮟'}</button>
                                {show && <div>Name: Miki, Age: 4, Plovdiv</div>}
                            </div>
                        </p>
                        {/* <a className="button" href="#">Details</a> */}
                    </li>
                    
                </ul>
                <a id="button-for-adoption" className="button" href="/all-pets">More cats</a>
            </section>

            <CarouselDash />

            <section id="my-pets-page" className="my-pets">
            <h2 id="find-and-adopt"> Does your cat need a cat?                        
                <button id="show-or-hide" onClick={() => toggleShow(!show)}>{show ? '⮝' : '⮟'}</button>
                {show && <div>Although cats have a reputation as solitary animals, 
                    they are social creatures and can thrive on forming close bonds with other creatures. 
                    Certain changes in behavior, such as irregular sleeping, eating, 
                    or grooming habits, 
                    may indicate that a cat is lonely and could benefit from some feline companionship.</div>}
            </h2>
            <ul className="my-pets-list"></ul>
            </section>
        </section>        
    )
}

export default Dashboard;