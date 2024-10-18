import { AppBar ,MenuItem,styled,Toolbar} from "@mui/material"

const NavBar = () =>{
  const StyledToolbar = styled(Toolbar)((theme)=>({
    display:"flex",
    
    justifyContent:"space-evenly",
    backgroundColor:"#141414",
    '&:hover': {
      backgroundColor:"white",
      color:"black",

    }

 }))


  
    return (
      <>
   
        <AppBar position="absolute">
          <StyledToolbar>
          <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
          </StyledToolbar>
           
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  