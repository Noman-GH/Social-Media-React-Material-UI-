import React from "react";
import {
    List,
    ListItem,
    ListItemAvatar,
    Divider,
    ListItemText,
    Avatar,
    AvatarGroup,
    Box,
    ImageList,
    ImageListItem,
    Typography,
} from "@mui/material";

export const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://material-ui.com/static/images/avatar/4.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/5.jpg"
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://material-ui.com/static/images/avatar/4.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/5.jpg"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Photos
                </Typography>
                <ImageList cols={3} gap={5}>
                    <ImageListItem>
                        <img
                            alt="Trevor Henderson"
                            src="https://images.pexels.com/photos/15829052/pexels-photo-15829052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            alt="Trevor Henderson"
                            src="https://images.pexels.com/photos/14656105/pexels-photo-14656105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            alt="Trevor Henderson"
                            src="https://images.pexels.com/photos/14002760/pexels-photo-14002760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        " — Do you have Paris recommendations? Have you ever…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
