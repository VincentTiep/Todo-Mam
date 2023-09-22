import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup";
import React from "react";
import { useFormik } from "formik";
import "../../App.css";
import { Photoshop } from "iconsax-react";

const validationSchema = yup.object({
  fName: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("First Name is required"),
  lName: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  pNumber: yup
    .number()
    .min(10, "Please check your Phone Number (10 numbers)")
    .max(999999999, "Please check your Phone Number (10 numbers)")
    .required("Phone Number is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  cfPassword: yup
    .string()
    .min(8, "Confirm password should be of minimum 8 characters length")
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    alert(
      JSON.stringify({
        fName: data.get("fName"),
        lName: data.get("lName"),
        email: data.get("email"),
        pNumber: data.get("pNumber"),
        password: data.get("password"),
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      pNumber: "",
      password: "",
      cfPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="bg-photoshop">
        <div className="div-image-1">
          <div>
            <Photoshop size="100" color="#fff" />
          </div>
          <h1 className="color-text">Photoshop</h1>
          <h2 className="color-text">Phần mềm TodoList hàng đầu thế giới!</h2>
        </div>

        <div className="bg-theme-1">
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fName"
                        name="fName"
                        required
                        fullWidth
                        id="fName"
                        label="First Name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.fName}
                        autoFocus
                        error={
                          formik.touched.fName && Boolean(formik.errors.fName)
                        }
                        helperText={formik.touched.fName && formik.errors.fName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lName"
                        label="Last Name"
                        name="lName"
                        autoComplete="lName"
                        value={formik.values.lName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.lName && Boolean(formik.errors.lName)
                        }
                        helperText={formik.touched.lName && formik.errors.lName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="pNumber"
                        label="Phone Number"
                        name="pNumber"
                        autoComplete="Phone Number"
                        value={formik.values.pNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.pNumber &&
                          Boolean(formik.errors.pNumber)
                        }
                        helperText={
                          formik.touched.pNumber && formik.errors.pNumber
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="cfPassword"
                        label="Confirm Password"
                        type="password"
                        id="cfPassword"
                        autoComplete="cf-password"
                        value={formik.values.cfPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.cfPassword &&
                          Boolean(formik.errors.cfPassword)
                        }
                        helperText={
                          formik.touched.cfPassword && formik.errors.cfPassword
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 3 }} />
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
