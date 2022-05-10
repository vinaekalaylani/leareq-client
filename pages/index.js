import PageComp from '../components/page'
import SideBar from '../components/sidebar'

export default function Home() {

  return (
    <div className="frame container">
      <SideBar />
      <PageComp />
    </div>
  )
}
