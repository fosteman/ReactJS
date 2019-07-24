import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
}));

export default function UserDetail({userDetail, open, handleClose}) {
    const classes = useStyles();

    return (

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar>
                                Usr
                            </Avatar>
                        }
                        title={'Id: ' + userDetail.id}
                        subheader={'Last Login: ' + userDetail.last_login}
                    />
                    <CardContent>
                        Saves: {userDetail.saves && userDetail.saves.join('-')}

                    </CardContent>
                </Card>
            </Modal>
    );
}
