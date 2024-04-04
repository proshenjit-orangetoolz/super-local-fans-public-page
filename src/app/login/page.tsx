import Link from "next/link";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Page = () => {
    return (
        <Stack
            justifyContent={'space-between'}
            alignItems={'center'}
            height={'100%'}
            width={'100%'}
            sx={{pt: {md: 10}}}
        >
            <Box
                sx={{
                    maxWidth: '540px',
                    padding: '48px',
                    gap: '48px',
                    bgcolor: 'common.white',
                    borderRadius: '12px'
                }}
            >
                <Box textAlign={'center'} mb={3}>
                    <Typography variant="h3" mb={0} color={'text.primary'}>
                        Welcome
                    </Typography>
                    <Typography variant="body1" color={'text.secondary'}>
                        Log in to your account & get started
                    </Typography>
                </Box>

                <Box component="form" noValidate autoComplete="off">
                    <Box component={'span'}>
                        <FormControl size="small" sx={{mb: 2}} fullWidth>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Email Address"
                                type="email"
                                focused
                            />
                            <FormHelperText></FormHelperText>
                        </FormControl>
                        <FormControl variant="outlined" sx={{mb: 2}} fullWidth focused>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            <VisibilityOffIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <FormHelperText></FormHelperText>
                        </FormControl>

                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={4}>
                            <FormGroup sx={{color: 'text.secondary'}}>
                                <FormControlLabel control={
                                    <Checkbox

                                    />}
                                                  label="Remember me"/>
                            </FormGroup>

                            <Link href="/forgot-password">
                                Forgot Password?
                            </Link>
                        </Stack>
                        <Button variant="contained">
                            Log In
                        </Button>
                    </Box>
                </Box>
                <Box mt={5} sx={{
                    textAlign: "center",
                }}>
                    <Typography variant="body1" color={'text.secondary'} textAlign={'center'}>
                        Do not have any account? {' '}
                        <Link href={'/'}>SignUp</Link>
                    </Typography>
                </Box>
            </Box>

            <Box textAlign={'center'} mt={4}>
                <Typography variant="body2">@ 2023 FTPO - All Rights Reserved</Typography>
                <Typography variant="body2" color={'other.primaryDark'}>
                    <Link href="https://findtheperfectoutfit.com/terms-and-conditions" target="_blank" rel="noopener">
                        Terms of services & privacy policy
                    </Link>
                </Typography>
            </Box>
        </Stack>
    );
}
export default Page