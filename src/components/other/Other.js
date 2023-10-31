import { connect } from "react-redux";

import "./other.scss";

const Other = (props) => {
  return (
    <div className="other">
      <h2>Other</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut laborum
        dolores id qui illum quo minus possimus architecto eligendi perspiciatis
        iusto maxime nemo cumque dolor illo labore, fugit dolorum?
      </p>
      <br />
      <hr />
      <br />
      <p>
        Count: <b>{props.myCount}</b>
      </p>
      <p>
        App version: <b>{props.appVersion}</b>
      </p>
      <button onClick={props.plus}>Plus</button>
      <button onClick={props.minus}>Minus</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myCount: state.count,
  appVersion: state.appVersion,
});

const mapDispatchToProps = dispatch => ({
  plus: () => dispatch({type: 'PLUS'}),
  minus: () => dispatch({type: 'MINUS'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Other);
