import { Button, Checkbox, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { myTheme } from '../theme'
import TextField from '@mui/material/TextField'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

const LoginPage = () => {
    const [checked, setChecked] = useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Stack
            spacing={2}
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: '48px',
                width: '720px',
                gap: '48px',
                bgcolor: 'white',
                borderRadius: '32px',
                alignItems: 'center',
            }}
        >
            {/* logo */}
            <Image
                src="/assets/icons/Gossip.svg"
                alt="logo"
                width={127}
                height={72}
                unoptimized
            />

            {/* email input */}
            <Stack spacing={1} justifyContent={'flex-start'} width={400}>
                {/* label */}
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Email
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontWeight: 400,
                            color: myTheme.color.destructive[500],
                        }}
                    >
                        *
                    </Typography>
                </Stack>
                {/* input */}
                <TextField
                    sx={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '6px',
                        bgcolor: 'white',
                        border: `1px solid ${myTheme.color.neutral[300]}`,
                        '& .MuiOutlinedInput-root': {
                            fontSize: '14px',
                            lineHeight: '20px',
                            height: '100%',
                            '& fieldset': {
                                borderColor: myTheme.color.neutral[300],
                            },
                            '&:hover fieldset': {
                                borderColor: '#E0E0E0',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E0E0E0',
                                border: 'none'
                            },
                        },
                    }}
                    variant="outlined"
                    placeholder="john@example.com"
                    InputProps={{
                        startAdornment: (
                            <Image
                                src="/assets/icons/login/email.svg"
                                alt="email"
                                width={24}
                                height={24}
                                unoptimized
                                style={{ marginRight: '16px' }}
                            />
                        ),
                    }}
                />
            </Stack>

            {/* password input */}
            <Stack spacing={1} justifyContent={'flex-start'} width={400}>
                {/* label */}
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Password
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontWeight: 400,
                            color: myTheme.color.destructive[500],
                        }}
                    >
                        *
                    </Typography>
                </Stack>
                {/* input */}
                <TextField
                    sx={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '6px',
                        bgcolor: 'white',
                        border: `1px solid ${myTheme.color.neutral[300]}`,
                        '& .MuiOutlinedInput-root': {
                            fontSize: '14px',
                            lineHeight: '20px',
                            height: '100%',
                            '& fieldset': {
                                borderColor: myTheme.color.neutral[300],
                            },
                            '&:hover fieldset': {
                                borderColor: '#E0E0E0',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E0E0E0',
                                border: 'none'
                            },
                        },
                    }}
                    variant="outlined"
                    type='password'
                    placeholder="********"
                    InputProps={{
                        startAdornment: (
                            <Image
                                src="/assets/icons/login/key.svg"
                                alt="key"
                                width={24}
                                height={24}
                                unoptimized
                                style={{ marginRight: '16px' }}
                            />
                        ),
                    }}
                />
            </Stack>
            {/* end password input */}

            {/* remember me checkbox */}
            <Stack direction="row" alignItems="center" spacing={0} width={400}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: myTheme.text.light.active,
                        cursor: 'pointer',
                    }}
                    onClick={() => { setChecked(!checked) }}
                >
                    Remember me
                </Typography>
            </Stack>
            {/* end remember me checkbox */}

            {/* actions button */}
            <Stack direction="row" alignItems="center" spacing={2} width={400}>
                {/* login button */}
                <Button
                    sx={{
                        borderRadius: '999px',
                        bgcolor: myTheme.color.primary[500],
                        color: myTheme.text.dark.active,
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        width: 217,
                        height: 48,
                    }}
                    variant="contained"
                >
                    Login
                    <ChevronRightIcon />
                </Button>

                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: myTheme.text.light.active,
                        cursor: 'pointer',
                    }}
                >
                    OR
                </Typography>

                {/* google button */}
                <IconButton
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '999px',
                        bgcolor: myTheme.color.primary[50],
                    }}
                >
                    <Image
                        src="/assets/icons/login/google.svg"
                        alt="google"
                        width={28}
                        height={28}
                        unoptimized
                    />
                </IconButton>

                {/* github button */}
                <IconButton
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '999px',
                        bgcolor: myTheme.color.primary[50],
                    }}
                >
                    <Image
                        src="/assets/icons/login/github.svg"
                        alt="github"
                        width={28}
                        height={28}
                        unoptimized
                    />
                </IconButton>
            </Stack>
            {/* end actions button */}


            {/* sign up button */}
            <Stack direction="row" alignItems="center" spacing={1} width={400} justifyContent={'center'}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: myTheme.text.light.active,
                    }}
                >
                    New here? Create an account.
                </Typography>

                <Button
                    variant="text"
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: myTheme.color.primary[500],
                        textTransform: 'none',
                    }}
                >
                    Sign up
                </Button>
            </Stack>
        </Stack>
    )
}

export default LoginPage