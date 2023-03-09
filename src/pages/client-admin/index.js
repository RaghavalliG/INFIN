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
              href="/client-admin/add"
              className="btn btn-primary-light"
            >
              Add Client
            </Link>
            <Link
              href="/client-admin/invite"
              className="btn btn-primary-light"
            >
              Invite Client
            </Link>
          </div>
          {client_list && client_list.length > 0 ? (
            <div className="dashboard-widget-wrap">
              {client_list?.map((item, key) => {
                return (
                  <ClientAdminCard
                    key={`client-admin-${key}`}
                    client_list={item}
                  />
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <AdminFooter />
    </>
  );
}
