import { createTheme, responsiveFontSizes } from "@mui/material/styles";


export const theme = createTheme({
  palette: {
    primary: {
      light: "#ff76961",
      main: "#f44336",
      dark: "#002884",
      contrastText: "#fff",
  
    },
    background: {
      default: '#303030',
    },
    secondary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components:{
    defaultProps: {
      justifyContent: 'center',
    }
  },

  Box: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh",

  },
  
});


export default theme;