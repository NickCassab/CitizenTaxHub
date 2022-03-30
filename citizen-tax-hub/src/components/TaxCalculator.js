const TaxCalculator = () => {
  return (
    <nav className="flex h-screen w-screen justify-center items-center citizen-blue">
      <div className="">
      <h1 className="text-2xl text-center font-Inter content-center text-citizen-drk-blue">
        Let's get started
        </h1>
        <h1 className="px-20 mb-8 text-3xl text-center font-bold font-Inter content-center text-citizen-drk-blue">
        Calculate your tax burden
        </h1>
        <div className="p-10 bg-white rounded-xl shadow-xl flex w-auto">
          <form className="flex grid-cols-2 items-center min-w-full">
            <input className=" placeholder:text-slate-400 block grow bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="$ Enter your salary" type="text" name="search"></input>                    
            <input type="button" value="Calculate" className="mx-4 text-sm bg-slate-200 text-slate-400 py-1 px-4 rounded-lg hover:bg-slate-100 object-right"></input>
          </form>
         
        </div>
      </div>
    </nav>
  );
}
 
export default TaxCalculator;