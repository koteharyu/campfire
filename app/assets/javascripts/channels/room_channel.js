App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    const messages = document.getElementById('messages');
    messages.insertAdjacentHTML('beforeend', data['message'])
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(message) {
    return this.perform('speak', {message: message});
  }
});

  window.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      App.room.speak(e.target.value);
      e.target.value = '';
      e.preventDefault();
    }
})
