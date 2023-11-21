import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/reducers/userReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
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
    <div
      style={{
        marginTop: 100,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 200,
        width: 200,
        marginBottom: 20,
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Login</h2>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="type email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="type password"
      />
      <button onClick={() => loginUser(email, password)}>Login</button>
    </div>
  );
};

export default Login;
