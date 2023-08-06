"use client"

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { MenuItems, Menu } from '@/constants/menuTabList';

export function MenuTab({ menuItem }: MenuItems) {
  const [value, setValue] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState<Menu | null>(menuItem[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSelectedItem(menuItem[newValue]);
  };

  return (
    <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '1600px',
          }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{ backgroundColor: 'white', width: '100%', alignItems: 'center', flexDirection: 'column' }}>

          {menuItem.map((item: Menu) => (
              <Tab label={item.key} sx={{ color: 'black', fontSize: '23px' }} />
          ))}
        </Tabs>

        {selectedItem?.url.map((image: string) => (
          <Image src={image} alt={image} height={100} width={500} layout='responsive' />
        ))}
      </Box>
    </div>
  );
}