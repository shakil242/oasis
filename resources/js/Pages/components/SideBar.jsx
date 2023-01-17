import { Link } from "@inertiajs/inertia-react"

export default function SideBar() {
  return (
    <>
      {/* Side Bar Start */}
      <aside id="sideBar" className="shadow">
        <ul className="list-unstyled">
          <li className="active">
            <Link href="">
              <i className="fa-sharp fa-solid fa-person-walking-arrow-loop-left" />
              <span className="h4">CashBack</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <i className="fa-sharp fa-solid fa-bell" />
              <span className="h4">Alerts</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <i className="fa-solid fa-chart-simple" />
              <span className="h4">Analytics</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <i className="fa-solid fa-database" />
              <span className="h4">Data</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <i className="fa-solid fa-user" />
              <span className="h4">Profiles</span>
            </Link>
          </li>
        </ul>
      </aside>
      {/* Side Bar End */}

    </>
  )
}
