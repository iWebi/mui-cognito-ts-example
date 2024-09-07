import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import typography from "./typography";

const defaultTheme = createTheme({ typography });
const theme = createTheme(defaultTheme, {
  palette: {
    background: {
      default: "#ffff",
      paper: colors.common.white,
    },
    primary: {
      contrastText: "#ffff",
      main: "#008489",
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "24px",
      letterSpacing: "-0.24px",
      lineHeight: "1.5!important",
    },
    h2: {
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: "-0.24px",
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: "-0.06px",
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: "-0.06px",
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: "-0.05px",
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: "-0.05px",
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "14px",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: 16,
      },
    },
    overline: {
      fontWeight: 500,
    },
    fontFamily: "Inter,sans-serif!important",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          color: "#fff",
          zIndex: defaultTheme.zIndex.drawer + 1,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "#d32f2f",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#d32f2f",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#475467!important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: 10,
        },
      },
    },
  },
});

export default theme;
