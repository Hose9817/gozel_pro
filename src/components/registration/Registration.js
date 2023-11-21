import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/reducers/userReducer";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);

  const userRegister = (email, password) => {
    // Получение объекта аутентификации
    const auth = getAuth();

    // Регистрация нового пользователя
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Получение созданного пользователя
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
      .catch((error) => {
        console.error("Registration error:", error);
      });
    setEmail("");
    setPassword("");
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
      <h2 style={{ marginBottom: 20 }}>Registration</h2>
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
      <button onClick={() => userRegister(email, password)}>
        Registration
      </button>
    </div>
  );
};

export default Registration;
