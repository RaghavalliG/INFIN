import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import CreateClient from "@/components/client-admin-card/create-client";
import Footer from "@/components/common/footer";

import SideMenu from "@/components/sideMenu";
import CreateUserClient from "@/components/client-user-card/create-user-Client";


export default function ClientUserCreate() {
    return <>
    <div className="admin_root_wrap">
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
              <CreateUserClient />
            </div>
          </div>
        </div>
        <AdminFooter />
        </div>
    </>
  }