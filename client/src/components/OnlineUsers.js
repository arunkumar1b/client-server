import React from "react";

const OnlineUsers = (props) => {
  const { onUserSelect, users, username, checkUnseenMessages } = props;
  console.log("checkUnseenMessages",users)
  return (
    <div>
      <div className="online-users-header">
        <div style={{ margin: "0 10px" }}>Online Users</div>
      </div>
      <ul className="users-list">
        {users &&
          Object.keys(users).map((user, i) => (
            <>
              {user !== username ? (
                <li key={i} onClick={() => onUserSelect(user)}>
                  <span style={{ textTransform: "capitalize" }}>{user}</span>
                  {checkUnseenMessages(user) !== 0 ? (
                    <span className="new-message-count">
                      {checkUnseenMessages(user)}
                    </span>
                  ) : null}
                </li>
              ) : null}
            </>
          ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;