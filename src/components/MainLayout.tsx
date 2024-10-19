import { ReactNode, useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar"; 
import SideBarCoordenador from "./SideBarCoordenador"; 
import { useAuth } from "../contexts/auth";
import { ClipLoader } from "react-spinners";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isSupervisor } = useAuth();
  const [localSupervisor, setLocalSupervisor] = useState<boolean | null>(null);
  
  console.log("bateu aqui");
  
  useEffect(() => {
    const storedSupervisor = sessionStorage.getItem('@App:isSupervisor');
    if (storedSupervisor !== null) {
      setLocalSupervisor(storedSupervisor === 'true');
    } else {
      setLocalSupervisor(isSupervisor);
    }
  }, [isSupervisor]);

  const loading = localSupervisor === null; // Verifica se ainda não carregou o valor de isSupervisor

  return (
    <div className="bg-gray-100 h-screen relative">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <ClipLoader color="#36d7b7" loading={loading} size={50} />
        </div>
      ) : (
        <>
          {localSupervisor ? <SideBarCoordenador /> : <SideBar />}
          <NavBar />
          <div className="p-4">{children}</div>
        </>
      )}
    </div>
  );
};

export default MainLayout;
