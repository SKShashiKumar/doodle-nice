import { Grid, Typography,Button } from "@mui/material";

const F4 = () => {
    return ( 
        <>  
            <Grid container>
                <Grid item md={6} lg={6} xl={6} className="star">
                    <img src="/img/star.jpg" alt="" className="starImg"/>
                    <div className="starContent">
                        <Grid container>
                            <Grid item md={12} lg={12} xl={12}>
                                {/* <div className={{paddingTop:'50vh'}}> */}
                                <Typography variant="h4" component="h4" sx={{'fontFamily':'Oswald','fontWeight':600,padding:'200px 0% 5% 0%'}}>
                                    The New Ultra Caramel<br/>Frappuccino Is Here!
                                </Typography>
                                <Typography>
                                    Congrats on doing that thing! This calls for caramel. Lots<br/>
                                    of it. With cold brew whipped cream. The new Ultra<br/>
                                    Caramel Frappuccino is here!<br/>
                                </Typography>
                                <div style={{padding:'5% 0% 5% 0%'}}>
                                    <Button variant="outlined" sx={{'color':'black',}}>learn more</Button>
                                </div>
                                {/* </div> */}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                    <img src="/img/Caramel.JPG" alt="" className="Caramel"/>
                </Grid>
                
            </Grid>

        </> 
     );
}
 
export default F4;