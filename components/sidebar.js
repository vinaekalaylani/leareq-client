import Link from 'next/link'

export default function SideBar(props) {
  return (
    <div className="sidebar d-flex align-items-center">
      <div className="side-profile rounded-circle d-flex justify-content-center align-items-center">
        <h1>{props.initial_user}</h1>
      </div>
      <div className="btn-sidebar">
        <Link href="/">
          <div>DASHBOARD</div>
        </Link>
      </div>
      <div className="btn-sidebar">
        <Link href="/time-off">
          <div>LEAVE</div>
        </Link>
      </div>
      <div className="btn-sidebar">
        <Link href="/employee">
          <div>EMPLOYEE</div>
        </Link>
      </div>
      <div className="btn-sidebar">
        <Link href="/report">
          <div>REPORT</div>
        </Link>
      </div>
    </div>
  )
}
