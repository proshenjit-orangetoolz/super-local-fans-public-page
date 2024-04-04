'use client';
import {createTheme} from '@mui/material/styles';
import {lightModePalette, myBreakpoints, typographyProperties} from "@/helpers/constant/themeConstant";

const theme = createTheme({
    palette: lightModePalette,
    typography: typographyProperties,
    breakpoints: myBreakpoints
});

export default theme;