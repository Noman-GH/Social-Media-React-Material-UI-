import React, { useState } from "react";
import {
    AppBar,
    styled,
    Toolbar,
    Typography,
    Box,
    InputBase,
    Badge,
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("Div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    Social-Media
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="Search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar
                        onClick={(e) => setOpen(true)}
                        sx={{ width: 30, height: 30 }}
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Typography
                        variant="span"
                        sx={{ display: { xs: "block", sm: "none" } }}
                    >
                        Noman
                    </Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};
