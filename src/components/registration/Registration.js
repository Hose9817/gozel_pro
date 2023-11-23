import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/reducers/userReducer";

import Modal from "../UI/modal/Modal";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = (email, password) => {
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
  };

  return (
    <div style={{height: '100vh', backgroundColor: "grey", paddingTop: 150 }}>
      <Modal
        title="Registration"
        loginOrRegistUser={userRegister}
      />
    </div>
  );
};

export default Registration;
