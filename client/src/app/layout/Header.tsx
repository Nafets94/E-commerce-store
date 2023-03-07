import { AppBar, Toolbar, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Dispatch, SetStateAction } from "react";

interface Props{
    darkMode: boolean;
    changeDarkMode: () => void;
}

export default function Header({darkMode, changeDarkMode}: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch 
                    checked = {darkMode}
                    onChange = {changeDarkMode}
                />
            </Toolbar>
        </AppBar>
    )
}