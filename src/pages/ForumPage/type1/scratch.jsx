if (this.state.loading === 'initial') {
  return <h2>Intializing...</h2>;
}
if (this.state.loading === 'true') {
  return <h2>Loading...</h2>;
}

update = async () => {
  this.setState({ loading: 'true' })
  try {
    var messageReturn = await messagesService.getMessages()
    this.setState({ loading: 'false', messages: messageReturn })
  } catch (err) {
    console.log("error at app.js- messageReturn", err)
  }
}