import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./modal.scss";

const Modal = ({
  title,
  password,
  setPassword,
  email,
  setEmail,
  loginOrRegistUser,
}) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
  };

  return (
    <div className="modal">
      <h3>{title}</h3>
      <TextField
        sx={{ margin: "20px 0" }}
        color="primary"
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ margin: "20px 0" }}
        color="primary"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        sx={{ margin: "20px 0", border: "1px solid", borderRadius: 2 }}
        variant="contained"
        size="large"
        color="primary"
        onClick={loginOrRegistUser}
      >
        {title}
      </Button>

      <div className="closeBtn" onClick={closeModal}><CloseIcon/></div>
    </div>
  );
};

export default Modal;
