<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <!-- <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel> -->

    <!-- Right Panel -->
    <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main class="safe-areas"></f7-view>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
        </f7-page>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              label="Username"
              name="username"
              @input="username = $event.target.value"
              placeholder="Username"
              type="text"
            />
            <f7-list-input
              label="Password"
              name="password"
              @input="password = $event.target.value"
              type="password"
              placeholder="Password"
            />
          </f7-list>
          <f7-list v-bind:disabled="!isLoggedIn">
            <f7-list-button @click="signIn()" title="Connection" login-screen-close></f7-list-button>
            <f7-block-footer>
              <p></p>
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>

  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.mobile.daybook', // App bundle ID
        name: 'Mobiledaybook', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      },
      username: '',
      password: '',
      isLoggedIn: Boolean

    }
  },
  created () {
    let username = window.localStorage.getItem('username');
    if(isEmpty(username)) {
        isLoggedIn = false;
    } else {
        isLoggedIn = true;
    }


  },
  mounted () {
  },
  computed: {
    // debugger
    // isiOS () {
    //   return window.isiOS
    // }

  },
  methods: {
      signIn: function () {
        // debugger
        const self = this
        let baseUrl = window.localStorage.getItem('baseUrl');
        // let password = window.atob(window.localStorage.getItem('password'));
        // const app = self.$f7
          // const router = self.$f7router
        let urlLogin = baseUrl + '/user/login?_format=json'
        let fetchData = {
          method: 'POST',
          body: JSON.stringify({name: self.username, pass: self.password}),
          // form_id: 'user_login_form',
          dataType: 'json',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        window.fetch(urlLogin, fetchData)
         .then(function (response) {
           if (!response.ok) {
             throw Error(response.statusText)
           }
           debugger;
           return response.json()
         }).then(function (data) {
           // self.isLoggedIn = true
          // let uid = data.current_user.uid
           window.localStorage.setItem('uid', data.current_user.uid)
           window.localStorage.setItem('username', data.current_user.name)
           self.username = data.current_user.name
           window.localStorage.setItem('csrfToken', data.csrf_token)
           window.localStorage.setItem('logoutToken', data.logout_token)
           window.sessionStorage.setItem('isLoggedIn', true)
           window.localStorage.setItem('session_name', data.session_name)
           window.localStorage.setItem('sessid', data.sessid)
           // self.$router.back()
           // console.log(urlLogin)
         })
          .catch(function (error) {
            console.debug(error)
          })
        // })
      },
      isEmpty : function (str) {
          return (!str || 0 === str.length);
      }
  }
}
</script>
