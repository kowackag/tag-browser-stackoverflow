import { NavBar } from "@/ui/molecules/NavBar";

export const Header = () => {
  return (
    <header className="border-b border-zinc-100 px-4 m-auto flex max-w-screen-2xl items-center justify-between">
      <div className="m-auto flex max-w-screen-2xl items-center justify-between  ">
             <NavBar /> 
      </div>
    </header>
  );
};
