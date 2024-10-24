import MainLayout from "../../../components/MainLayout";
import Provas from "../../../components/Provas";

export default function ProvaOnlineCoordenador() {
  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <Provas />
        </div>
      </div>
    </MainLayout>
  );
}
