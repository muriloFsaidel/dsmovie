import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';
function NavBar() {
    return (
        <header>
            {/*classe do bootstrap que já define a margin automaticamente*/}
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSmovies</h1>
                    <a href="https://github.com/muriloFsaidel/dsmovie">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/DevSuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;