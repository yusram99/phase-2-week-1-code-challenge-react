import React, { useState } from 'react';

const TransactionTable = ({ transactions, onDeleteTransaction }) => {
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  // Function to handle sorting when column header is clicked
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Function to compare values for sorting
  const compareValues = (value1, value2) => {
    if (value1 < value2) {
      return sortDirection === 'asc' ? -1 : 1;
    } else if (value1 > value2) {
      return sortDirection === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  };

  // Function to sort transactions based on the selected column and direction
  const sortedTransactions = transactions.slice().sort((a, b) => {
    if (sortColumn === 'date') {
      return compareValues(new Date(a.date), new Date(b.date));
    } else if (sortColumn === 'description') {
      return compareValues(a.description.toLowerCase(), b.description.toLowerCase());
    } else if (sortColumn === 'category') {
      return compareValues(a.category.toLowerCase(), b.category.toLowerCase());
    } else if (sortColumn === 'amount') {
      return compareValues(a.amount, b.amount);
    } else {
      return 0;
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('date')}>Date</th>
          <th onClick={() => handleSort('description')}>Description</th>
          <th onClick={() => handleSort('category')}>Category</th>
          <th onClick={() => handleSort('amount')}>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => onDeleteTransaction(transaction.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
