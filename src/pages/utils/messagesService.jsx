const BASE_URL = '/api/messages/'

export default {
  newMessage,
  getMessages,
  newPost,
  getPosts
}

function newPost(info) {
  return fetch(BASE_URL + 'newPost', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(info)
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('error in messagesservice: newMessage');
    })
}
function getPosts(info) {
  return fetch(BASE_URL + 'getposts/'+ info, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('error in messagesservice: getMessages');
    })
}
function newMessage(info) {
  return fetch(BASE_URL + 'newmessage', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(info)
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('error in messagesservice: newMessage');
    })
}
function getMessages(info) {
  console.log(info)
  return fetch(BASE_URL + 'getmessages/'+ info, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('error in messagesservice: getMessages');
    })
}