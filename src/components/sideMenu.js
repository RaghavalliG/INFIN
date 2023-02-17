import { Box, NavLink } from '@mantine/core';
import Dashboard from '@/components/icon/dashboard';
import Bag from './icon/bag';
export default function SideMenu() {
    return <Box className="admin-sidebar">
        <div className='brand-logo'><img src="/logo.png" alt='' /></div>
        <div className='admin-menus'>
        <NavLink label="Dashboard" icon={<Dashboard color="#000" />} />
        <NavLink label="Professional Admin" icon={<Bag color="#000" />} />
        <NavLink label="Professional Manager" icon={<Dashboard color="#000" />} />
        <NavLink label="Professional User" icon={<Dashboard color="#000" />} />
        <NavLink label="Client Admin" icon={<Dashboard color="#000" />} />
        <NavLink label="Client User" icon={<Dashboard color="#000" />} />
        <NavLink label="Custom Menu" icon={<Dashboard color="#000" />}>
            <NavLink label="Sub item" icon={<Dashboard color="#000" />}>
            <NavLink label="Sub item" icon={<Dashboard color="#000" />}></NavLink>
            </NavLink>
        </NavLink>
        </div>
        <div className='admin-menu-bottom'>
        <NavLink label="Logout" component='a' href="https://mantine.dev/core/nav-link/" icon={<Dashboard color="#000" />} />
        </div>
  </Box>
  }