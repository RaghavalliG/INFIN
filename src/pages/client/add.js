import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import CreateClient from "@/components/client-admin-card/create-client";
import Footer from "@/components/common/footer";

import SideMenu from "@/components/sideMenu";


export default function ClientCreate() {
    return <>
    <div className="admin_root_wrap">
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
              <CreateClient />
            </div>
          </div>
        </div>
        <AdminFooter />
        </div>
    </>
  }