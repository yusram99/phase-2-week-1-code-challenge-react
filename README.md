# Introduction
The Bank of Flatiron Transaction App is built with React and helps users manage their financial transactions. It consists of a Transaction Table to display the transactions, a Transaction Form to add new transactions, a Search Bar to filter transactions based on the description, and various functionalities to sort the transactions based on different columns. The transactions are stored locally using data from the data.json file.

# Installation
Follow the steps below to set up the project on your local machine:

1. Clone the repository from GitHub.
2. Navigate to the project directory in your terminal.
3. Run npm install to install the required dependencies.

# Usage
Once the installation is complete, follow the steps below to run the application:

1. In the project directory, run npm start.
2. The application will open in your default web browser at http://localhost:3000.
3. The Bank of Flatiron Transaction App will be displayed, showing the list of transactions, a search bar, and a form to add new transactions.

# Features
- View transactions in a tabular format.
- Add new transactions to the list.
- Delete existing transactions from the list.
- Sort transactions based on different columns (Date, Description, Category, and Amount).
- Search transactions based on the description.

# Components
App.js
The main component that integrates all the other components and manages the application state.

# TransactionTable.js
A component that displays the transactions in a tabular format. It allows sorting the transactions based on various columns and provides the functionality to delete transactions.

# TransactionForm.js
A component that provides a form to add new transactions. It ensures all fields are filled before submitting and resets the form after submission.

# SearchBar.js
A component that provides a search bar to filter transactions based on the description.

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

# License
This project is licensed under the MIT License.


