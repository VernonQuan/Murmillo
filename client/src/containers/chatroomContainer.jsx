import { connect } from 'react-redux';
import { resetMessages, updateMessages } from '../actions/actions.js';
import Chatroom from '../components/chatroom.jsx';

const mapStateToProps = (state) => {
  return {
    room: state.room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMessages: function() {
      dispatch(resetMessages());
    },
    updateMessages: function(message) {
      dispatch(updateMessages(message));
    }
  }
}

const ChatroomContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);

export default ChatroomContainer;