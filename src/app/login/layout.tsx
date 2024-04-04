import {Box, Grid} from "@mui/material";
import {ReactNode} from "react";
import Logo from "./../../assets/images/Logo.svg";

interface IProps {
    children: ReactNode
}

const Layout = ({children}: IProps) => {
    return (
        <Box>
            <Grid container sx={{minHeight: '100vh', bgcolor: '#F2F3F3'}}>
                {/* Left Side - Logo */}
                <Grid
                    item
                    md={6}
                    sm={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'white'
                    }}
                >
                    <img src={Logo} alt="FTPO Logo"/>
                </Grid>

                {/* Right side */}
                <Grid item sm={12} md={6} py={5}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}
export default Layout;