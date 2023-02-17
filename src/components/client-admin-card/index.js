import { Avatar, Menu } from "@mantine/core";
import DownloadIcon from "@/components/icon/download";
import VerticalDot from "@/components/icon/vertical-dot";
export default function ClientAdminCard() {

  const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(adminclientProfileDetails());
    },[])
    const result = useSelector((state) => state.adminClientData.adminClientData)
    console.log(result,"=====");
    return <div className="card admin-card-wedget">
    <div className="card-head">
        <div className="card-image">
        <Avatar src="/avatar_img.png" alt="Some alt text" size={78} />
        
        
        </div>
        <div className="info">
          <p className="card-text mb-1">Serial Number: 1234 ABC 234</p>
          <h3 className="card-title">Mayank Chaudhri</h3>
        </div>
        <div className="btns my-auto">
          <a href="" className="btn btn-sm btn-light-blue"><span className="icon"><DownloadIcon />
</span>Download details</a>
        </div>
        <Menu shadow="md" width={200} classNames="threedot-drops-menu">
        <Menu.Target>
          <div className="three-dot-btn"><VerticalDot /></div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<VerticalDot />}>View</Menu.Item>
          <Menu.Item icon={<VerticalDot />}>Edit</Menu.Item>
          <Menu.Item icon={<VerticalDot />}>Delete</Menu.Item>

        </Menu.Dropdown>
        </Menu>
    </div>
    <div className="card-body">
      <div className="key-val-lists row">
        <div className="item col-lg-6">
          <span className="key">Contact number: </span>
          <span className="val">1234 5678 910</span>
        </div>
        <div className="item col-lg-6">
          <span className="key">Years of experience:  </span>
          <span className="val">10 years +</span>
        </div>
        <div className="item col-lg-6">
          <span className="key">Email ID:  </span>
          <span className="val">demomail@gmail.com</span>
        </div>
        <div className="item col-lg-6">
          <span className="key">Subscribed plan:  </span>
          <span className="val"><span className="pill pill-light-blue">Professional</span></span>
        </div>
        <div className="item col-lg-12">
          <span className="key">Status: </span>
          <span className="val"> FCA</span>
        </div>
        <div className="item col-lg-12">
          <span className="key">Contact Address:  </span>
          <span className="val"> Nulla St.Mankato Mississippi 96522</span>
        </div>
        
      </div>
    </div>
  </div>
  }