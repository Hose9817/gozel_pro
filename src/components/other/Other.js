import { Button, ButtonGroup, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "../../redux/reducers/customerReducer";
import { addCashAction, getCashAction } from "../../redux/reducers/cashReducer";
import { fetchCustomers } from "../../redux/asyncActions/customers";

import "./other.scss";

const Other = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

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

  const marginBottom = { marginBottom: "30px" };

  return (
    <Container>
      <div className="other">
        <h2>Other</h2>

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
    </Container>
  );
};

export default Other;
