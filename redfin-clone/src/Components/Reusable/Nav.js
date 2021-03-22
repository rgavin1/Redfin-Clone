import React from 'react';
import '../../Assets/styles/Components/Nav.css';

const Nav = () => {
    return <ul className="nav">
                <li className="nav__left">
                    <span className="nav__logo">
                        <svg width="110" height="30" viewBox="0 0 110 30"><path d="M56.8 5.7c-2-1.3-4.8-1.8-8.4-1.8h-6.9v22.9h7.1c2.5 0 4.7-.3 6.5-1s3.2-1.9 4.2-3.6 1.5-3.9 1.5-6.7c0-2.4-.3-4.4-.9-6-.9-1.7-1.8-3-3.1-3.8zm-1.9 13.6c-.3 1.1-.9 2-1.7 2.6-.9.7-2.3 1-4.1 1h-2.5V7.5h2.1c2 0 3.6.3 4.6 1.1.7.6 1.3 1.3 1.6 2.4s.5 2.4.5 4c0 1.8-.1 3.2-.5 4.3zm9 7.4h5.2V17h6.1v-3.8h-6.1V7.6h9.3V3.8H63.9v22.9zm17.9 0H87V3.8h-5.2v22.9zM110 3.8h-5.3V17L95 3.8h-4.2v22.9h5.3V13.2l9.6 13.5h4.3V3.8zM21.7 27.6c-.4-.2-.9-.5-2.1-2.5l-2.4-3.9-2.8-4.6-.2-.4c.1 0 .3-.1.4-.1 3.2-1.1 5.1-4 5.1-8.2 0-2.1-.8-4-2.4-5.4-.2-.2-.5-.4-.7-.6C14.4.5 11.5 0 7.7 0H.4C0 0-.1.3.1.5s.4.5.4 1.3v23c-.1.9-.3 1.2-.4 1.4-.2.2-.1.5.4.5h5.3V17h2.4l1.7 2.9 2.1 3.6 1 1.8c1.2 2 2.3 3.3 4.2 3.6.2 0 1.2.2 1.6.2h.4c.8 0 1.6-.3 2.1-.5 0 0 .1-.1.2-.1.7-.4.5-.8.2-.9zM9.2 13.2H5.8V3.8h3.4c1.7 0 3 .2 3.9 1.1.4.3.6.7.8 1.2.2.6.4 1.3.4 2.2 0 1.2-.1 4.9-5.1 4.9zM28.5 17h6.1v-3.8h-6.1V7.6h9.3V3.8H23.3v22.9h14.5v-3.8h-9.3V17z"></path></svg>
                    </span>
                    <span  className="nav__input">
                       <form>
                            <input className="nav__query" type="text" placeholder="City, Address, School, Agent, ZIP" />
                            <input type="submit" value="Search" />
                       </form>
                    </span>
                </li>
                <li className="nav__right">
                    <ul>
                        <li>
                            <ul>
                                <li>Phone</li>
                                <li>Buy</li>
                                <li>Sell</li>
                                <li>Mortgage</li>
                                <li>Real Estate Agents</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Log In</li>
                                <li>Sign Up</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
}

export default Nav;