import ContentBar from "./Components/DashboardContent";
import SideBar from "./Components/DashboardSideBar";

function ControllPage() {
  return (
    <>
      <div className="flex">
        <div className="w-1/6">
          <SideBar/>
        </div>
        <div className="w-5/6">
          <ContentBar/>
        </div>
      </div>
    </>
  );
}
export default ControllPage;
