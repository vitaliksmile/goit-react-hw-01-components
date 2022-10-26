import PropTypes from 'prop-types';
import { Li, OnlineOrNot } from './FriendListItem.styled';
const FriendListItem = props => {
  const { avatar, name, isOnline, id } = props;
  return (
    <Li key={id} className="item">
      <OnlineOrNot isOnline={isOnline}></OnlineOrNot>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
