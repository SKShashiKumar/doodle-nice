import { Button, Grid,Typography } from "@mui/material";

const F2 = () => {
    return ( 
        <>
            <Grid container sx={{height:'100vh'}} >
                <Grid items md={6} lg={6} xl={6}>
                    <Typography variant="h4" component="h4" sx={{'fontFamily':'Oswald','fontWeight':600,padding:'10% 0% 0% 20%'}}>
                        <span className="greenLine">Four Drinks</span>, A Million <br/>Reasons
                    </Typography>
                    <Typography sx={{'fontStyle':'italic',padding:'2% 0% 0% 20%'}}>
                        "Just love yourself and you're set." – Lady Gaga
                    </Typography>
                    <Typography sx={{padding:'5% 0% 0% 20%'}}>
                        Lady Gaga and Starbucks share a mission: to build a kinder, <br/>
                        braver world. Through the Born This Way Foundation, Lady <br/>
                        Gaga has inspired her fans to embrace kindness in their <br/>
                        communities—online and in the world. With your help, we <br/>
                        can empower young people to spread more kindness.<br/>
                    </Typography>
                    <div style={{padding:'5% 0% 5% 20%'}}>
                    <Button variant="outlined" sx={{'color':'black',}}>learn more</Button>
                    </div>
                    <img src="/img/RemGaga.JPG" alt="" className="RemGaga"/>
                </Grid>
                <Grid items md={6} lg={6} xl={6}>
                    <img src="/img/SmileBucks.JPG" alt="" className="SmileBucks"/>
                </Grid>
            </Grid>
        </>
     );
}
 
export default F2;