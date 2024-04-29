import Dashboard from "../../components/Dashboard";
import Intro from "../../components/Intro";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

export default function Home() {
  return (
    <main>
      <SideBar />
      <NavBar />
      <Dashboard />
    </main>
  )
}
