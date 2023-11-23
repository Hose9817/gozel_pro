import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import "./modal.scss";

const Modal = ({
  title,
  password,
  setPassword,
  email,
  setEmail,
  loginOrRegistUser,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginOrRegistUser(data.email, data.password);
    console.log(data);
  };

  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
  };

  return (
    <form className="modal" onSubmit={handleSubmit(onSubmit)}>
      <h3>{title}</h3>
      <TextField
        sx={{ margin: "20px 0" }}
        color="primary"
        label="Email"
        variant="outlined"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <TextField
        sx={{ margin: "20px 0" }}
        color="primary"
        label="Password"
        variant="outlined"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 5,
            message: "Minimum 5 characters",
          },
          maxLength: {
            value: 10,
            message: "Maximum 10 characters",
          },
        })}
      />
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}

      <Button
        sx={{ margin: "20px 0", border: "1px solid", borderRadius: 2 }}
        variant="contained"
        size="large"
        color="primary"
        type="submit"
      >
        {title}
      </Button>
      <div className="closeBtn" onClick={closeModal}>
        <CloseIcon />
      </div>
    </form>
  );
};

export default Modal;
