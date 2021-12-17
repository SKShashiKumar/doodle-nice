import {Grid,Typography,Button} from '@mui/material'
const F5 = () => {
    return ( 
        <>
            <Grid container spacing={2}>
                <Grid item md={12} className="thumbnail ">
                    <img src="/img/BucksVariant.JPG" alt="FirstCover" className="F1Img"/>
                    <div className="F5ImgContent">
                        <Grid container>
                            <Grid item md={12} lg={12} xl={12}>
                            <Typography variant="h4" component="h4" sx={{'fontFamily':'Oswald','fontWeight':600,'padding':'10px'}}>
                                <span className="greenLine">Kindness St</span>arts<br/> With A Cup
                            </Typography>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sx={{'paddingLeft':'2%'}}>
                                <Typography>
                                    Introducing the Cups of Kindness<br/>
                                    collection: four very special drinks as<br/>
                                    delicious and refreshing as they are<br/>
                                    beautiful. Two new creations, Matcha<br/>
                                    Lemonade and Violet Drink, will join Pink<br/>
                                    Drink and Ombré Pink Drink as instant<br/>
                                    summer favorites.
                                </Typography>
                                <div style={{padding:'5% 0% 5% 0%'}}>
                                    <Button variant="outlined" sx={{'color':'black',}}>learn more</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </>
     );
}
 
export default F5;