import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Dashboard.module.css";
import Controls from "./../Controls/Controls";
import Balance from "./../Balance/Balance";
import TransactionHistory from "./../TransactionHistory/TransactionHistory";

const TYPE = {
  deposit: "deposit",
  withdraw: "withdraw"
};
const MESSAGE = {
  zero: "Введите сумму для проведения операции!",
  noEnough: "На счету недостаточно средств для проведения операции!"
};
class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0
  };

  handleDeposit = value => {
    this.checkTransaction(+value, TYPE.deposit);
  };
  handleWithdraw = value => {
    this.checkTransaction(+value, TYPE.withdraw);
  };
  checkTransaction = (value, type) => {
    const { balance } = this.state;
    if (!value) {
      toast(MESSAGE.zero);
      return;
    } else if (type === TYPE.withdraw && value > balance) {
      toast(MESSAGE.noEnough);
      return;
    } else {
      this.saveTransaction(value, type);
    }
  };
  saveTransaction = (value, type) => {
    const newTransaction = this.setTransaction(value, type);
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      balance:
        type === TYPE.deposit
          ? prevState.balance + value
          : prevState.balance - value
    }));
  };
  setTransaction = (amount, type) => ({
    id: uuidv1(),
    type,
    amount,
    date: new Date().toLocaleString()
  });
  incomeExpenses = (transactions, process) => {
    let value = 0;
    if (transactions.length) {
      value = transactions
        .filter(transaction => transaction.type === TYPE[process])
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    }
    return value;
  };
  render() {
    const { transactions, balance } = this.state;
    const income = this.incomeExpenses(transactions, TYPE.deposit);
    const expenses = this.incomeExpenses(transactions, TYPE.withdraw);
    return (
      <>
        <div className={styles.dashboard}>
          <Controls
            onDeposit={this.handleDeposit}
            onWithdraw={this.handleWithdraw}
          />
          <Balance balance={balance} income={income} expenses={expenses} />
          {transactions.length > 0 && (
            <TransactionHistory items={transactions} />
          )}
          <ToastContainer />
        </div>
      </>
    );
  }
}
export default Dashboard;
