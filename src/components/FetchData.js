import React, { Component } from "react";

class UserList extends Component {
   state = {
      userList: [], // list is empty in the beginning
      error: false
   };

   componentDidMount() {
       this.getUserList(); // function call
   }

   getUserList = async () => {
       try { //try to get data
           const response = await fetch("https://randomuser.me/api/");
           if (response.ok) { // ckeck if status code is 200
               const data = await response.json();
               this.setState({ userList: data.results});
           } else { this.setState({ error: true }) }
       } catch (e) { //code will jump here if there is a network problem
   this.setState({ error: true });
  }
};

  render() {
  const { userList, error } = this.state
      return (
          <div>
            {userList.length > 0 && userList.map(user => (
              <div key={user}>
                  <img src={user.picture.medium} alt="user"/>
                  <div>
                      <div>{user.name.first}{user.name.last}</div>
                      <div>{user.phone}</div>
                      <div>{user.email}</div>
                  </div>
              </div>
            ))}
            {error && <div>Sorry, can not display the data</div>}
          </div>
      )
}

}

export default UserList;