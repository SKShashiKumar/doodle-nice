import { Grid, Typography } from "@mui/material";
import {grey} from '@mui/material/colors';

const Footer = () => {
    return ( 
        <>
            <Grid container sx={{bgcolor: grey[800], color : 'white'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{padding:'3%'}}>
                    <Typography align="center">
                        Sample footer text
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{padding:'3%'}}>
                    <Typography align="center">
                        &copy;Doodleblue
                    </Typography>
                </Grid>
            </Grid>
        </>
     );
}
 
export default Footer;