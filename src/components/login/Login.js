import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/reducers/userReducer";

import Modal from "../UI/modal/Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = () => {
    const auth = getAuth();
    console.log(auth);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User loged:", user);
        dispatch(
          createUser({
            email: user.email,
            id: user.uid,
            token: user.stsTokenManager.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user"));
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "grey", paddingTop: 150 }}>
      <Modal
        title="Login"
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginOrRegistUser={loginUser}
      />
    </div>
  );
};

export default Login;
