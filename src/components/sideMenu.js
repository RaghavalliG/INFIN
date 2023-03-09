import { Box, NavLink } from '@mantine/core';
import Dashboard from '@/components/icon/dashboard';
import Bag from './icon/bag';
import { handleLogout } from 'store/actions/professionalAdminAction';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import IconLogout from './icon/IconLogout';
import Link from 'next/link';
import IconManager from './icon/IconManager';
import { NextLink } from '@mantine/next';
import IconProfUser from './icon/IconProfUser';
import IconClientAdmin from './icon/IconClientAdmin';
import IconClientUser from './icon/IconClientUser';
import { useState, useEffect } from 'react';


export default function SideMenu() {
    const [roles, setRoles] = useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRoles(localStorage.getItem('userroles'));
        }

    }, [roles])
    console.log(roles);
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
            {(roles == 'ROLE_PROFESSIONAL_ADMIN') ?
                <div>
                    <Link className={`menu-link ${path[1] == 'dashboard' ? 'active' : ''}`} href='/dashboard'>
                        <span className="icon"><Dashboard color="#000" size={25} /></span>
                        <span className="label">Dashboard</span>
                    </Link>
                    <Link className={`menu-link ${path[1] == 'professional-admin' ? 'active' : ''}`} href='/professional-admin'>
                        <span className="icon"><Bag color="#000" size={25} /></span>
                        <span className="label">Professional Admin Profile</span>
                    </Link>
                    <Link className={`menu-link ${path[1] == 'professional-manager' ? 'active' : ''}`} href='/professional-manager'>
                        <span className="icon"><IconManager color="#000" /></span>
                        <span className="label">Professional Manager</span>
                    </Link>
                    <Link className={`menu-link ${path[1] == 'professional-user' ? 'active' : ''}`} href='/professional-user'>
                            <span className="icon"><IconProfUser color="#000" /></span>
                            <span className="label">Professional User</span>
                        </Link>
                    <Link className={`menu-link ${path[1] == 'client-admin' ? 'active' : ''}`} href='/client-admin'>
                        <span className="icon"><IconClientAdmin color="#000" /></span>
                        <span className="label">Client Admin</span>
                    </Link>
                </div>
                :
                (roles == 'ROLE_PROFESSIONAL_ADMIN') ?
                    <div>
                        <Link className={`menu-link ${path[1] == 'professional-admin' ? 'active' : ''}`} href='/profile'>
                            <span className="icon"><IconManager color="#000" size={25} /></span>
                            <span className="label">Professional manager Profile</span>
                        </Link>
                        <Link className={`menu-link ${path[1] == 'professional-user' ? 'active' : ''}`} href='/professional-user'>
                            <span className="icon"><IconProfUser color="#000" /></span>
                            <span className="label">Professional User</span>
                        </Link>

                        <Link className={`menu-link ${path[1] == 'client-user' ? 'active' : ''}`} href='/client-user/'>
                            <span className="icon"><IconClientUser color="#000" /></span>
                            <span className="label">Client User</span>
                        </Link>
                    </div>
                    :''
    
            }


            {/*}
        <NavLink label="Client Admin" component='Link' href= '/client' icon={<Dashboard color="#000" />} />
        <NavLink label="Client User" component='Link' href= '/coming-soon' icon={<Dashboard color="#000" />} />
        <NavLink label="Custom Menu" icon={<Dashboard color="#000" />}>
            <NavLink label="Sub item" component='Link' href= '/coming-soon' icon={<Dashboard color="#000" />}>
            <NavLink label="Sub item" component='Link' href= '/coming-soon' icon={<Dashboard color="#000" />}></NavLink>
            </NavLink>
        </NavLink>
*/}
        </div>
        <div className='admin-menu-bottom'>
            {/* Logout */}
            <NavLink label="Logout" component='a' onClick={() => logout()} icon={<IconLogout />} />
        </div>
    </Box>
}