import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <h4>Nigeria</h4>
            <div>
                <ul>
                    <li><Link to="./">About</Link></li>
                    <li><Link to="./">Advertising</Link></li>
                    <li><Link to="./">Busines</Link></li>
                    <li><Link to="./">How search Works</Link></li>
                </ul>
                <ul>
                    <li><Link to="./"><img src="./download.png" alt="" />Carbon neutral since 2007</Link></li>
                </ul>
                <ul>
                    <li><Link to="./">Privacy</Link></li>
                    <li><Link to="./">Terms</Link></li>
                    <li><Link to="./">Settings</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
