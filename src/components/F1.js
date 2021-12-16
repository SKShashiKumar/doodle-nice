import { Grid, Typography } from "@mui/material";
    const F1 = () => {
    return ( 
        <>
            <Grid container spacing={2}>
                <Grid item md={12} className="thumbnail ">
                    <img src="/img/MainCover.jpeg" alt="FirstCover" className="F1Img"/>
                    <div className="F1ImgContent">
                        <Grid container>
                            <Grid item md={12} lg={12} xl={12}>
                                <Typography variant="h1" component="h2" sx={{'fontFamily':'Oswald','fontWeight':600}}>Starbucks&reg;<br/>Happy Hour</Typography>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sx={{padding:'2%'}}>
                                <Typography>We’ll meet you in your inbox. Drink deals are on their way.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                                <img src="/img/r1.jpeg" alt="ShakeRounded" className="ShakeRounded1" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}     >
                                <img src="/img/r2.jpeg" alt="ShakeRounded" className="ShakeRounded2" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                                <img src="/img/r3.jpeg" alt="ShakeRounded" className="ShakeRounded3" />
                        </Grid>
                    </Grid>
                    </div>
                </Grid>
            </Grid>


            
        </>
     );
}
 
export default F1;