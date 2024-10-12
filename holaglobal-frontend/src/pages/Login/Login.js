import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../../component/formik/LoginForm";
import { Typography } from "@mui/material";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  return (
    <div className="auth-container">
      <Typography>
        Login
        </Typography>
      <LoginForm navigate={navigate} from={from} />
    
    </div>
  );
}

export default LoginPage;
