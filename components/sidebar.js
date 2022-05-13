import Link from 'next/link'
import searchApi from '../services/api';

import { useEffect, useState } from 'react';

export default function SideBar() {
  const [initial, setInitial] = useState("")
  const [level, setLevel] = useState(0)

  const getLevel = () => {
    const res = localStorage.getItem("level")
    setLevel(res)
  }

  const getInitial = async () => {
    try {
      const res = await searchApi.getInitial()
      setInitial(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getInitial()
    getLevel()
  }, [])

  return (
    <div className="sidebar d-flex align-items-center">
      <div className="side-profile rounded-circle d-flex justify-content-center align-items-center">
        <h1>{initial}</h1>
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
      {
        level == 1 && (
          <>
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
          </>
        )
      }
    </div>
  )
}
