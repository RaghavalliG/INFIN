import { Avatar, Menu } from "@mantine/core";
import VerticalDot from "@/components/icon/vertical-dot";
import CSVDownload from "../common/CSVDownload";

export default function ProfessionalManagerCard(props) {
  // const dispatch = useDispatch();
  console.log(props);
  let headers = [
    // { label: "FirstName", key: props.firstName },
    // { label: "LastName", key: props.lastName },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "ContactNumber", key: "mobile" },
    { label: "Email", key: "email" },
  ];
  let data = [
    {
      firstName: `${props.firstName}`,
      lastName: `${props.lastName}`,
      //  name: `${props.firstName} ${props.lastName}`,
      mobile: `${props.mobile}`,
      email: `${props.email}`,
      // contactNumber: `${props.contactNumber}`,
    },
  ];
  return (
    <div className="card admin-card-wedget">
      <div className="card-head">
        <div className="card-image">
          <Avatar src="avatar_img.png" alt="Some alt text" size={78} />
        </div>
        <div className="info">
          <p className="card-text mb-1">Serial Number: 1234 ABC 234</p>
          <h3 className="card-title">
            {props.professionalManager_list.firstName}{" "}
            {props.professionalManager_list.lastName}
          </h3>
        </div>
        <div className="btns ms-auto">


          <div className="btn btn-sm btn-light-blue" >
            {props ? (
              <CSVDownload
                data={[props.professionalManager_list]}
                headers={headers}
                filename={"professional Manager Detail"}
              />
            ) : (
              ""
            )}
          </div>


          {/* <a href="" className="btn btn-sm btn-light-blue solid mx-2">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </span>
            Verify
          </a> */}
        </div>
        <Menu shadow="md" width={200} classNames="threedot-drops-menu">
          <Menu.Target>
            <div className="three-dot-btn">
              <VerticalDot />
            </div>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              component="a"
              href={`/professional-manager/${props.professionalManager_list.id}`}
              icon={<VerticalDot />}
            >
              View
            </Menu.Item>
            <Menu.Item
              component="a"
              href={`/professional-manager/edit/${props.professionalManager_list.id}`}
              icon={<VerticalDot />}
            >
              Edit
            </Menu.Item>
            <Menu.Item icon={<VerticalDot />}>Delete</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <div className="card-body">
        <div className="key-val-lists row">
          <div className=" col-lg-8">
            <div className="item mb-3">
              <span className="key">Contact number: </span>
              <span className="val">{props.professionalManager_list.mobile}</span>
            </div>
            <div className="item mb-3">
              <span className="key">Email ID: </span>
              <span className="val">{props.professionalManager_list.email}</span>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="item mb-3">
            <span className="key">Years of experience: </span>
            <span className="val">10 years +</span>
          </div>
          <div className="item mb-3">
            <span className="key">Subscribed plan: </span>
            <span className="val">
              <span className="pill pill-light-blue">Professional</span>
            </span>
          </div>
          </div>
          
          
          
          <div className="item col-lg-12">
            <span className="key">Status: </span>
            <span className="val"> FCA</span>
          </div>
          <div className="item col-lg-12">
            <span className="key">Contact Address: </span>
            <span className="val"> Nulla St.Mankato Mississippi 96522</span>
          </div>
        </div>
      </div>
    </div>
  );
}
