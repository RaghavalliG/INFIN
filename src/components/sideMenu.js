import { Box, NavLink } from '@mantine/core';
import Dashboard from '@/components/icon/dashboard';
import Bag from './icon/bag';
import { handleLogout } from 'store/actions/professionalAdminAction';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function SideMenu() {
    const dispatch = useDispatch();
    const Router = useRouter();
    var path = Router.pathname.split('/');
    // console.log(path);

    const logout = () => {
        // console.log('logout');
        dispatch(handleLogout());
    }
    return <Box className="admin-sidebar">
        <div className='brand-logo'><Image src="/logo.png" alt='' width={155} height={80} /></div>
        <div className='admin-menus'>
        <NavLink className={path[1]=='dashboard'? 'active': ''} label="Dashboard" component='a' href= '/dashboard' icon={<Dashboard color="#000" />} />
        <NavLink label="Professional Admin" component='a' href= '/professional-admin' icon={<Bag color="#000" />} />
        <NavLink label="Professional Manager" component='a' href= '/professional-manager' icon={<Dashboard color="#000" />} />
        <NavLink label="Professional User" component='a' href= '/coming-soon'  icon={<Dashboard color="#000" />} />
        <NavLink label="Client Admin" component='a' href= '/client' icon={<Dashboard color="#000" />} />
        <NavLink label="Client User" component='a' href= '/coming-soon' icon={<Dashboard color="#000" />} />
        <NavLink label="Custom Menu" icon={<Dashboard color="#000" />}>
            <NavLink label="Sub item" component='a' href= '/coming-soon' icon={<Dashboard color="#000" />}>
            <NavLink label="Sub item" component='a' href= '/coming-soon' icon={<Dashboard color="#000" />}></NavLink>
            </NavLink>
        </NavLink>
        </div>
        <div className='admin-menu-bottom'>
            {/* Logout */}
        <NavLink label="Logout" component='a' onClick={()=> logout()} icon={<Dashboard color="#000" />} />
        </div>
  </Box>
  }