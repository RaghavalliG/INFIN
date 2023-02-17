import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import ProfessionalManagerCard from "@/components/professional-manager-card";
import SideMenu from "@/components/sideMenu";


export default function ProfessionalManager() {
    return <>
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
              <ProfessionalManagerCard />
              <ProfessionalManagerCard />
            </div>
          </div>
        </div>
        <AdminFooter />
    </>
  }