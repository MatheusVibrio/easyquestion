import SideBar from "./SideBar";
import NavBar from "./NavBar";

export default function Intro() {
  return (
    <div className="m-0 font-sans text-base antialiased font-normal dark:bg-lime-900 leading-default bg-gray-50 text-slate-500">
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
      <SideBar />
      <NavBar />
      <div className="flex items-center justify-between px-4 py-1 mx-auto ml-[17rem] flex-wrap-inherit">
        
        <div className="flex flex-col">
          <h2 className="mb-0 text-white capitalize font-bold">Dashboard</h2>


          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Sales</h2>
            <p class="text-3xl font-bold text-blue-600"> $5,678 </p>
            <p className="text-sm text-gray-500 mt-2">This month</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Users</h2>
            <p className="text-3xl font-bold text-green-600"> 235 </p>
            <p className="text-sm text-gray-500 mt-2">Active users</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Products</h2>
            <p className="text-3xl font-bold text-yellow-600"> 98 </p>
            <p className="text-sm text-gray-500 mt-2">In stock</p>
        </div>
    </div> */}

          <div className="w-full px-6 py-6mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                      <div className="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            Today's Money
                          </p>
                          <h5 className="mb-2 font-bold">
                            $53,000
                          </h5>
                          <p className="mb-0 dark:opacity-60">
                            <span className="text-sm font-bold leading-normal text-emerald-500">
                              +55%
                            </span>
                            since yesterday
                          </p>
                        </div>
                      </div>
                      <div className="px-3 text-right basis-1/3">
                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                          <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                      <div className="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase  dark:opacity-60">
                            Today's Users
                          </p>
                          <h5 className="mb-2 font-bold ">
                            2,300
                          </h5>
                          <p className="mb-0  dark:opacity-60">
                            <span className="text-sm font-bold leading-normal text-emerald-500">
                              +3%
                            </span>
                            since last week
                          </p>
                        </div>
                      </div>
                      <div className="px-3 text-right basis-1/3">
                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                          <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                      <div className="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase  dark:opacity-60">
                            New Clients
                          </p>
                          <h5 className="mb-2 font-bold ">
                            +3,462
                          </h5>
                          <p className="mb-0  dark:opacity-60">
                            <span className="text-sm font-bold leading-normal text-red-600">
                              -2%
                            </span>
                            since last quarter
                          </p>
                        </div>
                      </div>
                      <div className="px-3 text-right basis-1/3">
                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                          <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                      <div className="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase  dark:opacity-60">
                            Sales
                          </p>
                          <h5 className="mb-2 font-bold ">
                            $103,430
                          </h5>
                          <p className="mb-0  dark:opacity-60">
                            <span className="text-sm font-bold leading-normal text-emerald-500">
                              +5%
                            </span>
                            than last month
                          </p>
                        </div>
                      </div>
                      <div className="px-3 text-right basis-1/3">
                        <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                          <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-6 -mx-3">
              <div className="w-full max-w-full px-3 mt-0">
                <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                  <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                    <h6 className="capitalize ">Sales overview</h6>
                    <p className="mb-0 text-sm leading-normal  dark:opacity-60">
                      <i className="fa fa-arrow-up text-emerald-500"></i>
                      <span className="font-semibold">4% more</span> in 2021
                    </p>
                  </div>
                  <div className="flex-auto p-4">
                    <div>
                      <canvas id="chart-line" height="300"></canvas>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            <div className="flex flex-wrap mt-6 -mx-3">
              <div className="w-full max-w-full px-3 py-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 rounded-t-4">
                    <div className="flex justify-between">
                      <h6 className="mb-2 ">Sales by Country</h6>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                            <div className="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/icons/flags/US.png"
                                  alt="Country flag"
                                />
                              </div>
                              <div className="ml-6">
                                <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                  Country:
                                </p>
                                <h6 className="mb-0 text-sm leading-normal ">
                                  United States
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Sales:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                2500
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Value:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                $230,900
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="flex-1 text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Bounce:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                29.9%
                              </h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                            <div className="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/icons/flags/DE.png"
                                  alt="Country flag"
                                />
                              </div>
                              <div className="ml-6">
                                <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                  Country:
                                </p>
                                <h6 className="mb-0 text-sm leading-normal ">
                                  Germany
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Sales:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                3.900
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Value:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                $440,000
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="flex-1 text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Bounce:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                40.22%
                              </h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                            <div className="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/icons/flags/GB.png"
                                  alt="Country flag"
                                />
                              </div>
                              <div className="ml-6">
                                <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                  Country:
                                </p>
                                <h6 className="mb-0 text-sm leading-normal ">
                                  Great Britain
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Sales:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                1.400
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Value:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                $190,700
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div className="flex-1 text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Bounce:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                23.44%
                              </h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap">
                            <div className="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/icons/flags/BR.png"
                                  alt="Country flag"
                                />
                              </div>
                              <div className="ml-6">
                                <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                  Country:
                                </p>
                                <h6 className="mb-0 text-sm leading-normal ">
                                  Brasil
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Sales:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                562
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Value:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                $143,960
                              </h6>
                            </div>
                          </td>
                          <td className="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="flex-1 text-center">
                              <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">
                                Bounce:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal ">
                                32.14%
                              </h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 py-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none">
                <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                  <div className="p-4 pb-0 rounded-t-4">
                    <h6 className="mb-0 ">Categories</h6>
                  </div>
                  <div className="flex-auto p-4">
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                      <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                        <div className="flex items-center">
                          <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                            <i className="text-white ni ni-mobile-button relative top-0.75 text-xxs"></i>
                          </div>
                          <div className="flex flex-col">
                            <h6 className="mb-1 text-sm leading-normal text-slate-700 ">
                              Devices
                            </h6>
                            <span className="text-xs leading-tight /80">
                              250 in stock,{" "}
                              <span className="font-semibold">346+ sold</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all ">
                            <i
                              className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </li>
                      <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit">
                        <div className="flex items-center">
                          <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                            <i className="text-white ni ni-tag relative top-0.75 text-xxs"></i>
                          </div>
                          <div className="flex flex-col">
                            <h6 className="mb-1 text-sm leading-normal text-slate-700 ">
                              Tickets
                            </h6>
                            <span className="text-xs leading-tight /80">
                              123 closed,{" "}
                              <span className="font-semibold">15 open</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all ">
                            <i
                              className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </li>
                      <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-b-lg rounded-xl text-inherit">
                        <div className="flex items-center">
                          <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                            <i className="text-white ni ni-box-2 relative top-0.75 text-xxs"></i>
                          </div>
                          <div className="flex flex-col">
                            <h6 className="mb-1 text-sm leading-normal text-slate-700 ">
                              Error logs
                            </h6>
                            <span className="text-xs leading-tight /80">
                              1 is active,{" "}
                              <span className="font-semibold">40 closed</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all ">
                            <i
                              className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </li>
                      <li className="relative flex justify-between py-2 pr-4 border-0 rounded-b-lg rounded-xl text-inherit">
                        <div className="flex items-center">
                          <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                            <i className="text-white ni ni-satisfied relative top-0.75 text-xxs"></i>
                          </div>
                          <div className="flex flex-col">
                            <h6 className="mb-1 text-sm leading-normal text-slate-700 ">
                              Happy users
                            </h6>
                            <span className="text-xs leading-tight /80">
                              <span className="font-semibold">+ 430 </span>
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all ">
                            <i
                              className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
