import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import Footer from "@/components/common/footer";
import ProfessionalManagerCard from "@/components/professional-manager-card";
//import CreateManager from "@/components/professional-manager-card/create-manager";
import CreateUser from "@/components/professional-user-card/create-user";
import SideMenu from "@/components/sideMenu";


export default function ProfessionalManagerCreate() {
    return <>
    <div className="admin_root_wrap">
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
               
              <CreateUser />
            </div>
          </div>
        </div>
        <AdminFooter />
        </div>
    </>
  }