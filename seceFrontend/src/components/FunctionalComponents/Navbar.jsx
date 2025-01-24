import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

const Navbar = () => {
    const [dropdown, showDropdown] = useState(false);

    const toggleDropdown = () => {
        showDropdown(prevState => !prevState);
    };

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/gallery' className="link">Gallery</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                    <li><Link to='/memo' className="link">Memo</Link></li>
                    <div
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={toggleDropdown}
                        className="dropdown-container"
                    >
                        <span>Hooks</span>
                        {dropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to='/useState' className='link'>useState</Link></li>
                                <li><Link to='/useEffect' className='link'>useEffect</Link></li>
                                <li><Link to='/useapi' className="link">UseEffect API</Link></li>
                                <li><Link to='/use-ref' className="link">UseRef</Link></li>
                                <li><Link to='/use-memo' className="link">UseMemo</Link></li>
                                <li><Link to='/use-callback' className="link">UseCallback</Link></li>
                                <li><Link to='/use-context' className="link">UseContext</Link></li>
                                <li><Link to='/usereducer' className="link">UseReducer</Link></li>
                                <li><Link to='/rlm' className="link">ReactLifecycleMethods</Link></li>
                                <li><Link to='/useimage' className="link">UseEffect API Image</Link></li>
                            </ul>
                        )}
                    </div>
                    <li><Link to='/signup' className="link">SignUp</Link></li>
                    <li><Link to='/login' className="link">Login</Link></li>
                </ol>
            </nav>
        </header>
    );
}

export default Navbar;
