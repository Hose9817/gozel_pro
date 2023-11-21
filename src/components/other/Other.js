import { Button, ButtonGroup, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "../../redux/reducers/customerReducer";
import { addCashAction, getCashAction } from "../../redux/reducers/cashReducer";
import { fetchCustomers } from "../../redux/asyncActions/customers";

import { Navigate } from "react-router-dom";
import { removeUser } from "../../redux/reducers/userReducer";
import { useAuth } from "../../hooks/useAuth";

import "./other.scss";

const Other = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const { isAuth, email } = useAuth();

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addClient = (name) => {
    const client = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(client));
  };

  const removeClient = (id) => {
    dispatch(removeCustomerAction(id));
  };

  const logOutHandler = () => {
    console.log("logOut");

    dispatch(removeUser());
  };

  const marginBottom = { marginBottom: "30px" };

  return (
    <Container>
      <div className="other">
        <h2>Other</h2>
        <p style={marginBottom}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut
          laborum dolores id qui illum quo minus possimus architecto eligendi
          perspiciatis iusto maxime nemo cumque dolor illo labore, fugit
          dolorum?
          <hr />
        </p>

        <h3 style={marginBottom}>
          Count: <b>{cash}</b>
        </h3>
        <div style={{ marginBottom: 20 }}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={() => addCash(Number(prompt()))}>Add Money</Button>
            <Button onClick={() => getCash(Number(prompt()))}>Get Money</Button>
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button onClick={() => addClient(prompt())}>Add Client</Button>
            <Button onClick={() => getCash(Number(prompt()))}>
              Remove Client
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Button onClick={() => dispatch(fetchCustomers())}>
            Add Cients from DB
          </Button>
        </div>

        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                style={{
                  fontSize: 20,
                  border: "1px solid",
                  marginTop: 10,
                  width: "fit-content",
                  padding: 5,
                }}
                onClick={() => removeClient(customer.id)}
                key={customer.id}
              >
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ marginTop: 20, fontSize: 26 }}>
            Customers arn't exist!
          </div>
        )}
      </div>

      {isAuth ? (
        <div style={{ marginTop: 30 }}>
          <h3>Welcome bro...</h3>
          <button onClick={logOutHandler}>Log out from {email}</button>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </Container>
  );
};

export default Other;
