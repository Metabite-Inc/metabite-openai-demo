import { Outlet, NavLink, Link } from "react-router-dom";

#import github from "../../assets/github.svg";

import metabite_logo from "../../assets/metabite_logo.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>METABITE: Ask a nutritionist (prototype)</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://www.metabite.com/" target={"_blank"} title="Metabite website link">
                                    <img
                                        src={metabite_logo}
                                        alt="Metabite logo"
                                        aria-label="Link to metabite website"
                                        width="20px"
                                        height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + Cognitive Search</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
