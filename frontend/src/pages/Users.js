import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log('Fetching users from API...');
        const response = await axios.get('http://localhost:8001/api/users/');
        console.log('API response:', response.data);
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users. Please try again later.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="users-container loading">Loading users...</div>;
  }

  if (error) {
    return <div className="users-container error">{error}</div>;
  }

  return (
    <div className="users-container">
      <h2 className="users-title">Registered Users</h2>
      
      {users.length === 0 ? (
        <p className="no-users">No users registered yet.</p>
      ) : (
        <div className="table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Date Joined</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.date_joined}</td>
                  <td>
                    <span className={`status ${user.is_active ? 'active' : 'inactive'}`}>
                      {user.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
