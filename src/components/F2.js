import { Button, Grid,Typography } from "@mui/material";
import black from '@mui/material/colors'

const F2 = () => {
    return ( 
        <>
            <Grid container>
                <Grid items md={6} lg={6} xl={6}>
                    <Typography variant="h4" component="h4" sx={{'fontFamily':'Oswald','fontWeight':600}}>
                        Four Drinks, A Million <br/>Reasons
                    </Typography>
                    <Typography sx={{'fontStyle':'italic'}}>
                        "Just love yourself and you're set." – Lady Gaga
                    </Typography>
                    <Typography>
                        Lady Gaga and Starbucks share a mission: to build a kinder, <br/>
                        braver world. Through the Born This Way Foundation, Lady <br/>
                        Gaga has inspired her fans to embrace kindness in their <br/>
                        communities—online and in the world. With your help, we <br/>
                        can empower young people to spread more kindness.<br/>
                    </Typography>
                    <Button variant="outlined" sx={{'color':'black'}}>learn more</Button>
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