
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Alert, Spinner, Button, Modal, Form } from "react-bootstrap";
import "./Transactions.css"; // Ensure the CSS is correctly linked

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    transaction_date: "",
    final_price: "",
    buyer: "",
    agent: "",
    land: "",
  });

  useEffect(() => {
    // Fetch transactions from API
    axios
      .get("http://127.0.0.1:8000/api/transaction/")
      .then((response) => {
        setTransactions(response.data); // Set transactions data
        setLoading(false); // Stop loading spinner
      })
      .catch((err) => {
        setError("Failed to fetch transactions. Please try again later.");
        setLoading(false); // Stop loading spinner
      });
  }, []);

  const handleAddTransaction = () => {
    // Prepare the transaction data (do not include 'id' as it will be auto-generated)
    const formattedTransaction = {
      transaction_date: newTransaction.transaction_date,
      final_price: newTransaction.final_price,
      buyer: newTransaction.buyer,
      agent: newTransaction.agent,
      land: newTransaction.land,
    };

    // Send POST request to add a new transaction
    axios
      .post("http://127.0.0.1:8000/api/transaction/", formattedTransaction)
      .then((response) => {
        setTransactions([...transactions, response.data]); // Add the new transaction to the list
        setShowAddModal(false); // Close the modal
        setNewTransaction({
          transaction_date: "",
          final_price: "",
          buyer: "",
          agent: "",
          land: "",
        }); // Reset the form
      })
      .catch((err) => {
        setError("Failed to add transaction. Please try again later.");
      });
  };

  const handleDeleteTransaction = (id) => {
    // Send DELETE request to remove a transaction
    axios
      .delete(`http://127.0.0.1:8000/api/transaction/${id}/`)
      .then(() => {
        // Remove the transaction from the state list
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
      })
      .catch((err) => {
        setError("Failed to delete transaction. Please try again later.");
      });
  };

  return (
    <div className="transactions-page">
      <h1>Transactions</h1>
      {loading && (
        <div className="loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="buttons-container">
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
         Transaction
        </Button>
      </div>

      {!loading && !error && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Date</th>
              <th>Final Price</th>
              <th>Buyer</th>
              <th>Agent</th>
              <th>Land</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id}>
                <td>{index + 1}</td>
                <td>{new Date(transaction.transaction_date).toLocaleString()}</td>
                <td>{transaction.final_price}</td>
                <td>{transaction.buyer}</td>
                <td>{transaction.agent}</td>
                <td>{transaction.land}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal for Adding Transaction */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="transaction_date">
              <Form.Label>Transaction Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newTransaction.transaction_date}
                onChange={(e) => setNewTransaction({ ...newTransaction, transaction_date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="final_price">
              <Form.Label>Final Price</Form.Label>
              <Form.Control
                type="number"
                value={newTransaction.final_price}
                onChange={(e) => setNewTransaction({ ...newTransaction, final_price: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="buyer">
              <Form.Label>Buyer</Form.Label>
              <Form.Control
                type="text"
                value={newTransaction.buyer}
                onChange={(e) => setNewTransaction({ ...newTransaction, buyer: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="agent">
              <Form.Label>Agent</Form.Label>
              <Form.Control
                type="text"
                value={newTransaction.agent}
                onChange={(e) => setNewTransaction({ ...newTransaction, agent: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="land">
              <Form.Label>Land</Form.Label>
              <Form.Control
                type="text"
                value={newTransaction.land}
                onChange={(e) => setNewTransaction({ ...newTransaction, land: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTransaction}>
            Transaction
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Transactions;
