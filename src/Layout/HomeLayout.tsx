import { Outlet } from "react-router-dom";


const HomeLayout = () => {
 
  return (
    <div>
       <header className="flex px-10 py-5 shadow sticky z-10 top-0 left-0 bg-white">
        <h1 className="font-bold uppercase text-lg">Malon chart application</h1>
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
