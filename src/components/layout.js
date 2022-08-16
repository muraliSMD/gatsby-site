import * as React from "react"
import {Link} from 'gatsby'
import { container, heading, navlinks, navLinkItem, navLinkText } from '../components/layout.module.css'


const Layout =({pagetitle, pagehead, children}) => {
return (

    <main className={container}>
        <title>{pagetitle}</title>
        <nav >
            <ul className={navlinks}>
                <li className={navLinkItem}><Link to = "/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
            </ul>
        </nav>
        <h1 className={heading}>{pagehead}</h1>
        {children}
   
    <Link to =""></Link>
    </main>

);
};

export default Layout;