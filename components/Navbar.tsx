"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { navbarList } from '@/constants/navbarList';


export function Navbar() {
    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', }}>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  alignItems: 'center'
              }}
            >
              <Image src='/full-logo.svg' alt='Jeongwoo P&C' width={325} height={75} />
            </Typography>
  
           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup ="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navbarList.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button 
                        onClick={() => {router.push(page.url)}} 
                        component="a" 
                        sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px' }}
                        >
                            {page.title}
                        </Button>
                    </Box>
                </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Image src='/logo.svg' alt='JW-P&C' width={50} height={50} />
            </Typography>
            <Box sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex', justifyContent: 'center' }, gap: 12  }}>
                {navbarList.map((page) => (
                <Button 
                onClick={() => {router.push(page.url)}} 
                component="a" 
                sx={{ 
                    my: 2, 
                    color: 'black', 
                    display: 'block', 
                    fontSize: '27px', 
                    transition: 'color 0.3s font-size 0.3s', 
                    '&:hover': { color: 'darkblue' } 
                  }}>
                    {page.title}
                </Button>
                ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
};