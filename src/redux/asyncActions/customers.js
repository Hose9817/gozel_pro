import { addManyCustomersAction } from "../reducers/customerReducer";

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => dispatch(addManyCustomersAction(json)));
  };
};
