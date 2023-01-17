import { Link } from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";

export default function Header({userInfo}) {
  const firstLetter = userInfo.name.slice(0, 1);
  return (
    <>
      {/* MAIN HEADER START */}
      <header className="bg-blue-gradient p-fixed--header shadow">
        <nav className="navbar navbar-expand-lg px-md-2">
          <div className="container-fluid d-md-flex justify-content-md-between">
            <Link className="navbar-brand d-flex" href="#">
              <img src="assets/img/logo.png" className="img-fluid" alt srcSet />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <p className="m-0 nav-link">
                    <input type="date" className="form-control datePickH" id="dateHeader" />
                  </p>
                </li>
                <li className="nav-item">
                  <p className="m-0 nav-link">
                    <input type="date" className="form-control datePickH" id="dateHeader" />
                  </p>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="user-letter">{firstLetter}</span>
                    <span>{userInfo.name}</span>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" href="#">
                        <Dropdown.Link href={route('profile.edit')}>
                          <i className="fa-solid fa-lock pe-2" /> Change password
                        </Dropdown.Link>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        <i className="fa-solid fa-circle-info pe-2" /> User guide
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item">
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                          <i className="fa-solid fa-right-from-bracket pe-2" />Log Out
                        </Dropdown.Link>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* MAIN HEADER END */}

    </>
  )
}
