import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css';

// Import the local data from data.json
import transactionsData from './data.json';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTransactions(transactionsData.transactions);
  }, []);

  const handleAddTransaction = (newTransaction) => {
    // Placeholder implementation for adding a new transaction
    // You can modify this function to handle the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id) => {
    // Placeholder implementation for deleting a transaction
    // You can modify this function to remove the transaction with the given ID
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const handleSort = (sortBy) => {
    // Placeholder implementation for sorting transactions
    // You can modify this function to sort the transactions based on the selected column (sortBy)
    const sortedTransactions = [...transactions];
    sortedTransactions.sort((a, b) => {
      // Add your sorting logic here
    });
    setTransactions(sortedTransactions);
  };

  const handleSearch = (searchTermInput) => {
    setSearchTerm(searchTermInput);
  };

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} onSearch={handleSearch} />
      <TransactionTable
        transactions={transactions.filter((transaction) =>
          transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        searchTerm={searchTerm}
        onDeleteTransaction={handleDeleteTransaction}
        onSort={handleSort}
      />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;
