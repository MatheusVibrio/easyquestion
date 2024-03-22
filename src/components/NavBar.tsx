import {
    FiCheckCircle,
    FiFileMinus,
    FiFileText,
    FiHome,
    FiLogOut,
    FiPlusCircle,
    FiSettings,
  } from "react-icons/fi";
  
  export default function NavBar() {
    return (
    <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main navbar-scroll="false">
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto ml-[16rem] flex-wrap-inherit">
          <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4">
              <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
              
              <li className="flex items-center">
                <a href="../pages/sign-in.html" className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand">
                  <i className="fa fa-user sm:mr-1"></i>
                  <span className="hidden sm:inline">Perfil</span>
                </a>
              </li>
              <li className="flex items-center pl-4 xl:hidden">
                <a href="javascript:;" className="block p-0 text-sm text-white transition-all ease-nav-brand" sidenav-trigger>
                  <div className="w-4.5 overflow-hidden">
                    <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                    <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                    <i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
                  </div>
                </a>
              </li>
              <li className="flex items-center px-4">
                <a href="javascript:;" className="p-0 text-sm text-white transition-all ease-nav-brand">
                  <i fixed-plugin-button-nav className="cursor-pointer fa fa-cog"></i>
                 
                </a>
              </li>

              

              <li className="relative flex items-center pr-2">
                <p className="hidden transform-dropdown-show"></p>
                <a href="javascript:;" className="block p-0 text-sm text-white transition-all ease-nav-brand" dropdown-trigger aria-expanded="false">
                  <i className="cursor-pointer fa fa-bell"></i>
                </a>

                <ul dropdown-menu className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease lg:shadow-3xl duration-250 min-w-44 before:sm:right-8 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent dark:shadow-dark-xl dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                  <li className="relative mb-2">
                    <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="javascript:;">
                      <div className="flex py-1">
                        <div className="my-auto">
                          <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white"><span className="font-semibold">New message</span> from Laur</h6>
                          <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                            <i className="mr-1 fa fa-clock"></i>
                            13 minutes ago
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="relative mb-2">
                    <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                      <div className="flex py-1">
                        <div className="my-auto">
                          <img src="../assets/img/small-logos/logo-spotify.svg" className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white"><span className="font-semibold">New album</span> by Travis Scott</h6>
                          <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                            <i className="mr-1 fa fa-clock"></i>
                            1 day
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="relative">
                    <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                      <div className="flex py-1">
                        <div className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                          
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white">Payment successfully completed</h6>
                          <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                            <i className="mr-1 fa fa-clock"></i>
                            2 days
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </main>
    );
  }
  