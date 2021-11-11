import { createTheme } from '@mui/material'

//Configuration for Material-UI theme, as well as various overrides for specific components.
export const MUI_THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3e29c0'
    },
    secondary: {
      main: '#a71cb2'
    }
  },
  typography: {
    fontFamily: 'Red Hat Text'
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#252932',
          backgroundImage: 'none'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: '800px'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        }
      },
      defaultProps: {
        color: '#FFFFFF',
        target: '_blank' //This site has no routing so every link is going to be external
      }
    }
  }
})
