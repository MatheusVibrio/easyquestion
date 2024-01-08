
interface HeroProps {
  title: string;
  description: string;
}

export default function Hero(props: HeroProps) {

    return (
      <section id="intro" className="bg-red-100d w-screen snap-start flex flex-col justify-center">
        <div className="mx-8 lg:mx-24 sm:pl-8 h-full w-full flex items-center">
          <div className="w-1/3 flex flex-col">
            <div className="w-[19rem] sm:w-[26rem] md:w-[37rem] lg:w-[44rem]">
              <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-7xl md:leading-[120%]">{props.title}</h1>
            </div>
            <div className=" text-base md:text-[1.375rem] font-medium">
              <p className="mt-6 w-[19rem] sm:w-[26rem] md:w-[37rem] text-base md:text-[1.375rem] font-sans">{props.description}</p>
              <form className="flex flex-col gap-2 w-full">
                  <label className="block">
                    <input type="text" placeholder='E-mail' className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                  </label>
                  <label className="block">
                    <input placeholder='Senha' type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                  </label>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full relative p-1 -z-10">
                <img
                  src="/assets/images/HeroImage.jpg"
                  alt="image"
                />          
              </div>
        </div>
      </section>
    
    );
  }
  