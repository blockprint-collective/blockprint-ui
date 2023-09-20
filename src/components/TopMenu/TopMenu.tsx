'use client'

import {useState} from 'react';
import Typography from '@/components/Typography/Typography';
import ExtraResources from '@/components/ExtraResources/ExtraResources';
import SideMenu from '@/components/TopMenu/SideMenu';

const TopMenu = () => {
  const [isMenu, toggleMenu] = useState(false)

  const closeMenu = () => toggleMenu(false)
  const openMenu = () => toggleMenu(true)

  return (
      <>
          <div className="items-center space-x-4 hidden md:flex">
              <div className="h-full cursor-pointer">
                  <Typography type="text-tiny">Client Resources</Typography>
              </div>
              <ExtraResources/>
          </div>
          <div onClick={openMenu} className="md:hidden rounded-full h-8 w-8 border border-dark300 flex items-center justify-center cursor-pointer hover:bg-dark300">
              <i className="bi-list text-base2"/>
          </div>
          <SideMenu isOpen={isMenu} onClose={closeMenu}/>
      </>
  )
}

export default TopMenu;