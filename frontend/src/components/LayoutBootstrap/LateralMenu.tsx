import Link from "next/link";

interface Props {

};
export const LateralMenu = (props: Props) => {
    return (
        <div className="offcanvas offcanvas-start sidebar-nav bg-dark" tabIndex={-1} id="sidebar">
            <div className="offcanvas-body p-0">
                <nav className="navbar-dark">
                    <ul className="navbar-nav">
                        <li>
                            <div className="text-muted small fw-bold text-uppercase px-3">
                                CORE
                            </div>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                                    <span>Dashboard</span>
                                </a>

                            </Link>

                        </li>
                        <li className="my-4">
                            <hr className="dropdown-divider bg-light"/>
                        </li>
                        <li>
                            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                Other Options
                            </div>
                        </li>

                        <li>
                            <Link href="/championship" >
                                <a className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-book-fill"></i></span>
                                    <span>Championship</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

