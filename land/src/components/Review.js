import React, { Component } from 'react';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://backend-gqfp.onrender.com/api/reviews/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ reviews: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { reviews, loading, error } = this.state;

    return (
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Reviews</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <table className="table" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">User</th>
              <th scope="col">Land</th>
              <th scope="col">Rating</th>
              <th scope="col">Comment</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={review.id}>
                <th scope="row">{index + 1}</th>
                <td>{review.user}</td>
                <td>{review.land}</td>
                <td>{review.rating}</td>
                <td>{review.comment}</td>
                <td>{new Date(review.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Reviews;
