import React, { Component } from "react";
import T from "prop-types";
import styles from "./Controls.module.css";

class Controls extends Component {
  static propTypes = {
    onDeposit: T.func.isRequired,
    onWithdraw: T.func.isRequired
  };
  state = {
    value: ""
  };
  saveInputValue = e => {
    this.setState({ value: e.currentTarget.value });
  };
  sendTransaction = transaction => {
    const { value } = this.state;
    transaction(+value);
    this.setState({ value: "" });
  };
  render() {
    const { onDeposit, onWithdraw } = this.props;
    const { value } = this.state;
    return (
      <section className={styles.controls}>
        <input
          className={styles.input}
          type="number"
          name="amount"
          value={value}
          onChange={this.saveInputValue}
        />
        <button
          className={styles.button}
          type="button"
          onClick={() => this.sendTransaction(onDeposit)}
        >
          Deposit
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={() => this.sendTransaction(onWithdraw)}
        >
          Withdraw
        </button>
      </section>
    );
  }
}

export default Controls;
