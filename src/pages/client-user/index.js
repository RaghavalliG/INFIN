import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import SideMenu from "@/components/sideMenu";
import ClientAdminCard from "@/components/client-admin-card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardClientList } from "store/actions/professionalAdminAction";
import { toast } from "react-toastify";
import Loading from "@/components/common/loading";
import Link from "next/link";
import ClientUserCard from "@/components/client-user-card";

export default function ClientList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardClientList());
  }, []);
  const result = useSelector(
    (state) => state.dashboardClientlist.dashboardClientlist
  );
  const client_list = result.content;
  console.log(client_list, "=====>>>");
  // toast.loading('Waiting...', { isLoading: false, autoClose: 0 });
  return (
    <>
      <div className="admin_wrap container-fluid">
        <SideMenu />
        <div className="admin-content-area">
          <AdminHeader />

          <div className="admin-filter-action">
            <Link
              href="/client-user/add"
              className="btn btn-primary-light"
            >
              Add Client User
            </Link>
            <Link
              href="/client-user/invite"
              className="btn btn-primary-light"
            >
              Invite Client User
            </Link>
          </div>
         <ClientUserCard/>
        </div>
      </div>
      <AdminFooter />
    </>
  );
}
