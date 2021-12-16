import { Grid,Typography,Button } from '@mui/material'
const F3 = () => {
    return ( 
        <>
            <Grid container>
                <Grid item md={6} lg={6} xl={6}>
                    <img src="/img/GreenBucks.JPG" alt="" className="GreenBucks"/>
                </Grid>
                
                <Grid items md={6} lg={6} xl={6}>
                    <Typography variant="h4" component="h4" sx={{'fontFamily':'Oswald','fontWeight':600,padding:'10% 0% 0% 20%'}}>
                    <span className="greenLine">Introducing</span> Vanilla Sweet <br/>Cream Cold Brew—Sweet,<br/> Creamy, Cold, Bold.
                    </Typography>
                    <Typography sx={{padding:'5% 0% 0% 20%'}}>
                    Just before serving, our slow-steeped custom blend<br/>
                     Starbucks&reg; Cold Brew Coffee is topped with a delicate float<br/>
                      of house-made vanilla sweet cream that cascades<br/>
                       throughout the cup.<br/>
                    </Typography>
                    <div style={{padding:'5% 0% 5% 20%'}}>
                    <Button variant="outlined" sx={{'color':'black',}}>learn more</Button>
                    </div>
                    <img src="/img/CupwithLeafs.JPG" alt="" className="CupwithLeafs"/>
                    
                </Grid>
            </Grid>
        </>
     );
}
 
export default F3;