import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/reducers/userReducer";

import Modal from "../UI/modal/Modal";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
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
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{height: '100vh', backgroundColor: "grey", paddingTop: 150 }}>
      <Modal
        title="Registration"
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginOrRegistUser={userRegister}
      />
    </div>
  );
};

export default Registration;
