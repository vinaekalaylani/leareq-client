import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import searchApi from '../services/api';
import { success,error } from '../components/swal';

export default function SideBar() {
  const [initial, setInitial] = useState("")
  const [level, setLevel] = useState(0)
  const router = useRouter()

  const getLevel = () => {
    const res = localStorage.getItem("level")
    setLevel(res)
  }

  const getInitial = async () => {
    try {
      const res = await searchApi.getInitial()
      setInitial(res.data)
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("level")
    success()
    router.push("/login")
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
      <div role="button" className="btn-sidebar">
        <Link href="/">
          <div>DASHBOARD</div>
        </Link>
      </div>
      <div role="button" className="btn-sidebar">
        <Link href="/apply-timeoff">
          <div>APPLY</div>
        </Link>
      </div>
      <div role="button" className="btn-sidebar">
        <Link href="/time-off">
          <div>LEAVE</div>
        </Link>
      </div>
      {level == 1 && (
        <>
          <div role="button" className="btn-sidebar">
            <Link href="/employee">
              <div>EMPLOYEE</div>
            </Link>
          </div>
          <div role="button" className="btn-sidebar">
            <Link href="/report">
              <div>REPORT</div>
            </Link>
          </div>
        </>
      )}
      <div role="button" className="btn-sidebar" onClick={logout}>
        <div>LOGOUT</div>
      </div>
    </div>
  )
}
