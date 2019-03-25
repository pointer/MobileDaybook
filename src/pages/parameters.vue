<template>
  <f7-page name="parameters">
    <f7-navbar back-link="" sliding></f7-navbar>
        <form class="list form-store-data" id="params">
          <ul>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="uid" placeholder="numero usager">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="username" placeholder="votre nom d'usager">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="password" name="password" placeholder="mot de passe">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="email" placeholder="votre email">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="baseUrl" placeholder="adresse du site">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="punchCard" value="daybook_punch_clock_node">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="incident" value="daybook_incident_node">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="dayBook" value="daybook_dbk_node">
                  </div>
                </div>
              </div>
            </li>
            <li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="dayBookList" value="daybook-dbk-list">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label"></div>
                  <div class="item-input-wrap">
                    <input type="text" name="doumentList" value="document-list">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Déjà Bagdé ou non ?</div>
                  <div class="item-after">
                    <label class="toggle toggle-init">
                      <input type="checkbox" name="hasPunchedIn" value="yes"><i class="toggle-icon"></i>
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
		</form>
      <div class="block">
        <p class="row">
          <button class="col button button-fill" v-on:click="parameterAction">Enregistrer</button>
        </p>
      </div>
        <!-- <div class = "content-block">
          <p><a href = "#" class = "button button-fill button-round color-green save-storage-data" v-on:click="parameterAction">Enregistrer</a></p>
        </div> -->

  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
	import { mapState, mapActions } from 'vuex';
  export default {
    data () {
      return {
        punchCard: '',
        userEmail: '',
        baseUrl: '',
        incident: '',
        dayBook: '',
        isLoggedIn: Boolean,
        hasPunchedIn: Boolean,
        daybookCreated: Boolean,
        username: '',
        uid: '',
        password: '',
        daybookList: ''
      }
    },
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle
    },
    created(){
      // this.baseUrl = window.localStorage.getItem('params.baseUrl');
      // this.punchCard = window.localStorage.getItem('params.punchCard');
      // this.userEmail = window.localStorage.getItem('params.userEmail');
      // this.incident = window.localStorage.getItem('params.incident');
      // this.dayBook = window.localStorage.getItem('params.dayBook');
      // // this.isLoggedIn = window.localStorage.getItem('isLoggedIn');
      // this.hasPunchedIn = window.localStorage.getItem('params.hasPunchedIn[0]');
      // // this.daybookCreated = window.localStorage.getItem('daybookCreated');
      // this.username = window.localStorage.getItem('params.username');
      // this.uid = window.localStorage.getItem('params.uid');
      // this.password = window.localStorage.getItem('params.password');

    },
  	computed: {
        // ...mapState({
        //     parameters: state => state.parameters
        // })
    },
		methods: {
			parameterAction: function() {
				const self = this;
        let paramData = this.$root.$f7.form.getFormData('params');
        debugger;
				// Set new user into storage
        self.parameterStore(JSON.stringify(paramData));
        window.localStorage.setItem('baseUrl', paramData.baseUrl);
        window.localStorage.setItem('punchCard', paramData.punchCard);
        window.localStorage.setItem('userEmail', paramData.email);
        window.localStorage.setItem('incident', paramData.incident);
        window.localStorage.setItem('dayBook', paramData.dayBook);
        // window.localStorage.setItem('isLoggedIn', paramData.isLoggedIn);
        window.localStorage.setItem('hasPunchedIn', paramData.hasPunchedIn[0]);
        // window.localStorage.setItem('daybookCreated', paramData.daybookCreated);
        window.localStorage.setItem('username', paramData.username);
        window.localStorage.setItem('uid', paramData.uid);
        // let pass = window.btoa(paramData.password);
        window.localStorage.setItem('password', paramData.password);
			},
			 ...mapActions(['parameterStore'])
		}
  };
</script>
