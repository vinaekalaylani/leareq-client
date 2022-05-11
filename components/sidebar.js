import Link from 'next/link'

export default function SideBar() {
  return (
    <div className="sidebar d-flex align-items-center">
      <div className="side-profile rounded-circle d-flex justify-content-center align-items-center">
        <h1>BM</h1>
      </div>
      <div className="btn-sidebar">
        <Link href="/dashboard">
          <div>DASHBOARD</div>
        </Link>
      </div>
      <div className="btn-sidebar">
        <Link href="/time-off">
          <div>TIME OFF</div>
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
