import {Grid,Typography} from '@mui/material'
const F5 = () => {
    return ( 
        <>
            <Grid container>
                <Grid item md={4} lg={4} xl={4}>
                    <Typography variant="h4" component="h4" sx={{'fontFamily':'Oswald','fontWeight':600,'padding':'10px'}}>
                        Introducing Vanilla Sweet <br/>Cream Cold Brew—Sweet,<br/> Creamy, Cold, Bold.
                    </Typography>
                    <Typography>
                        Just before serving, our slow-steeped custom blend<br/>
                        Starbucks&reg; Cold Brew Coffee is topped with a delicate float<br/>
                        of house-made vanilla sweet cream that cascades<br/>
                        throughout the cup.<br/>
                    </Typography>
                </Grid>
                <Grid item md={8} lg={8} xl={8}>
                    <img src="/img/BucksVariant.JPG" alt="" className="BucksVariant"/>
                </Grid>
            </Grid>
        </>
     );
}
 
export default F5;