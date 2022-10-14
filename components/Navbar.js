import React from "react";
import Link from "next/link";


function Navbar(props) {
    return (
        <div>
            <div className="navbar-container">
                <Link href="/">
                    <a className="logo">UniSchedule</a>
                </Link>
                {/* <Link href="/signUp">
                    <a className="blue-button">Get Started</a>
                </Link>
                <Link href="/signIn">
                    <a className="white-button"> Sign In </a>
                </Link> */}
            </div>
        </div>
    )

}

export default Navbar;