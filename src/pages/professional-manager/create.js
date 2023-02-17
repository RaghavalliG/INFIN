import AdminHeader from "@/components/common/admin-header";
import Footer from "@/components/common/footer";
import ProfessionalManagerCard from "@/components/professional-manager-card";
import CreateManager from "@/components/professional-manager-card/create-manager";
import SideMenu from "@/components/sideMenu";


export default function ProfessionalManagerCreate() {
    return <>
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
              <CreateManager />
            </div>
          </div>
        </div>
        <Footer />
    </>
  }