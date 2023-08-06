"use client"

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';

export function Footer() {
    return (
        <Container sx={{ mt: 'auto', py: 10, display: 'flex' }}>
            <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
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
                    <Image src='/full-en-logo.png' alt='JW P&C' width={230} height={30} />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'center' } }}>
                    <Typography noWrap sx={{ mr: 2, mx: 5 }}>
                        주소. 경기도 평택시 청북읍 삼계4길 78-50 | 대표. OOO<br />
                        전화. 031-682-0233 | 팩스. OOO-OOO-OOOO
                    </Typography>
                    <Typography noWrap sx={{ mr: 2, mx: 5 }}>
                        Copyright © <b>JeongWoo P&C</b>. All rights reserved.
                    </Typography>
                </Box>
            </Toolbar>
        </Container>
    )
}