const Header = () => {
  return (
    <nav className="header">
      <div className="links h-full bg-citizen-drk-blue columns-2">
        <div className="flex">
        <div className="h-10 w-10 bg-white rounded-full ml-8 mt-7 mb-9"></div>
        <h1 class="text-left text-2xl font-bold font-Inter text-white mt-8 ml-4">
        Citizen Tax Hub
        </h1>
        </div>
        <h2 class="text-right text-1xl font-Inter text-white p-8">
          Raymond Jones
        </h2>
        
      </div>
    </nav>
  );
}
 
export default Header;