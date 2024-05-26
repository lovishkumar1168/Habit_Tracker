import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            Habit Tracker
            </div>
            <ul className={styles.navLinks}>
            <li>
                <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
                <button className={styles.navButton} 
                        data-toggle="modal" 
                        data-target="#exampleModalCenter">
                    Add Habit
                </button>
            </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}

export default Navbar;