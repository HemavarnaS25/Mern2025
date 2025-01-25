import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

const Navbar = () => {
    const [hooksDropdown, showHooksDropdown] = useState(false);
    const [memoDropdown, showMemoDropdown] = useState(false);

    const toggleHooksDropdown = () => {
        showHooksDropdown(prevState => !prevState);
    };

    const toggleMemoDropdown = () => {
        showMemoDropdown(prevState => !prevState);
    };

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/gallery' className="link">Gallery</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                    <div
                        onMouseEnter={toggleMemoDropdown}
                        onMouseLeave={toggleMemoDropdown}
                        className="dropdown-container"
                    >
                        <span>Memo</span>
                        {memoDropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to='/use-memo-basics' className="link">Memo Basics</Link></li>
                                <li><Link to='/memo-optimization' className="link">Optimization with Memo</Link></li>
                                <li><Link to='/memo-vs-useMemo' className="link">Memo vs UseMemo</Link></li>
                            </ul>
                        )}
                    </div>
                    <div
                        onMouseEnter={toggleHooksDropdown}
                        onMouseLeave={toggleHooksDropdown}
                        className="dropdown-container"
                    >
                        <span>Hooks</span>
                        {hooksDropdown && (
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
};

export default Navbar;
