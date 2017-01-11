import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentUsers, fetchAllTimeUsers } from '../actions/index';

import User from './user';

class Leaderboard extends Component {
  componentWillMount() {
     this.props.fetchRecentUsers();
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr className='headers'>
              <th>Image</th>
              <th>Username</th>
              <th>Points in the last 30 days</th>
              <th>All time points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((u) => {
              return (
                <tr key={u.username} className='rows'>
                  <td>
                    <img src={u.img} className='img'/>
                  </td>
                  <td>
                    {u.username}
                  </td>
                  <td>
                    {u.recent}
                  </td>
                  <td>
                    {u.alltime}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchRecentUsers, fetchAllTimeUsers })(Leaderboard);
