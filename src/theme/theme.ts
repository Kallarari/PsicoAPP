import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#215A6D",
      light:'#FFF'
    },
    secondary: {
      main:'#3CA2A2',
      dark: "#2D2D29", // Cor secundária do tema
    },
    background: {
      default: "#f4f5f8", // Cor de fundo
      paper: "#ffffff", // Cor de fundo de cards
    },
    text: {
      primary: "#FFF",
      secondary: "#3CA2A2",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
    subtitle1:{
      fontFamily:''
    }
  },
  shape: {
    borderRadius: 8, // Bordas arredondadas
  },
  spacing: 8, // Unidade de espaçamento (multiplicadores, como 8px, 16px, etc.)
  components: {
    MuiTypography: {
      defaultProps: {
        color: "#215A6D", 
      },
    },
  },
});

export default theme;
