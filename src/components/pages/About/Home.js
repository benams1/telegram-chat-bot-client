import React, {useEffect} from "react";
import {connect} from "react-redux";
import { fetchUsers, selectUser } from "../../../actions/availableUsersActions";
import { subscribeMessages } from "../../../actions/messagesActions";

import PropTypes from "prop-types";

function Home({fetchUsers, users, selectUser, selectedUser, subscribeMessages}) {
  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    if (selectedUser.chat_id){
      subscribeMessages(selectedUser.chat_id)
    }
  }, [selectedUser])
  const onSelect = (user) => {
    selectUser(user)
  };
    return (
        <React.Fragment>
            <h1>Please Select on of the emails below.</h1>
          {users.map(user => <div onClick={()=> onSelect(user)} key={user.chat_id} > {user.email} </div>)}
        </React.Fragment>
    );
}
Home.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  subscribeMessages: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  selectedUser: PropTypes.object.isRequired,
}

export default connect(state => ({
  users: state.availableUsers.users,
  selectedUser: state.availableUsers.selectedUser,
}), { fetchUsers, selectUser, subscribeMessages })(Home);
