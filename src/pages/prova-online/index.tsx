import Intro from "../../components/Intro";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

export default function ProvaOnline() {
  return (
    <div className="m-0 font-sans text-base antialiased font-normal dark:bg-lime-900 leading-default bg-gray-50 text-slate-500">
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
      <SideBar />
      <NavBar />
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto ml-[17rem] flex-wrap-inherit">
          <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li
              className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white"
              aria-current="page"
            >
              Prova Online
            </li>
          </ol>
          <h2 className="mb-0 text-white capitalize font-bold">Dashboard</h2>
        </div>
    </div>
  );
}
