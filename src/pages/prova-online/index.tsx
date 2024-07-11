import NavBar from "../../components/NavBar";
import Provas from "../../components/Provas";
import SideBar from "../../components/SideBar";

export default function ProvaOnline() {
  return (
    <main className="bg-gray-100 h-screen">
      <SideBar />
      <NavBar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <Provas />
        </div>
      </div>
    </main>
  );
}
