const FriendListItem = props => {
  //   console.log(props)
  const { avatar, name, isOnline, id } = props;
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
