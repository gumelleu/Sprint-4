import { Box, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from "@mui/material/Grid"
import { Container } from "@mui/material"
import {Typography} from "@mui/material"
import {Button} from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"



const About = () =>{
  
    const StyledHero = styled("div")(()=>({
        backgroundColor :"black",
        color:"white",
        height:"100vh",
        display:"flex",
        alignItems:"center",


    }))
 

    return (
      <>
    
  <StyledHero>
        <Container>
        <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <Box position ="relative">
      <Box position="absolute" width={"180%"} top={-100} right ={0}>
       <AnimatedBackground/>

      </Box>
      <Box position="absolute" textAlign="center">

      <Typography variant="h2" textAlign ="center">About</Typography>
      
      


      </Box>
    </Box>


   
   
  </Grid>
  <Grid item xs={12} md={8}>
    <Typography variant="h4" textAlign ="center" pb={5}>Skills</Typography>
   

       <Grid container display="flex" justifyContent="center" spacing ={3} pt={3}>
        <Grid item xs={12} md = {4} display="flex" justifyContent="center" > 
    
  

        </Grid>
         <Grid item xs = {12} md={4} display="flex" justifyContent="center" >
       
        

        </Grid>
    </Grid>
    

    
  </Grid>
        
</Grid>
        </Container>


 
  </StyledHero>
    
      </>
    )
  }
  
  export default About