const React = require('react')
const Default = require('../layouts/Default')


class Login extends React.Component {
  render () {
    return (
        <div class='login'>
      <Default title="Login to Playlist Creator Account">
        <form action='/user/login' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Login Account' />
          </fieldset>
        </form>
      </Default>
      </div>
    )
  }
}

module.exports = Login
