import React from 'react';
import Expense from './components/Expenses/Expense'
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
   // //Earlier Version before itro of JSX format 
  // React.createElement('div',{},
  // React.createElement('h2',{},"Todos List"),
  // React.createElement(Expense,{expenses:expenses}));
  // //CreateElement(element_which_needs_to_be_created,object_that_configures_the_element)
    <div 
    >
      <h2 style={{textAlign:'center'}}>Todos List</h2>
      <NewExpense/>
      <Expense
      expenses={expenses}
      />
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem> */}
      {/* <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> */}


    </div>
  );
}

export default App;
