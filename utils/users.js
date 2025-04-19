const users = []

// Join user to chat
function userJoin (id, username, room) {
  const user = { id, username, room};

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser (id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave (id) {
  const index = users.findIndex(user => user.id === id);

  // Not found will return -1
  // Người dùng được tìm thấy trong mảng users.
  // Xóa 1 phần tử tại vị trí index trong mảng users.
  // Trả về một mảng chứa phần tử vừa bị xóa.
  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};