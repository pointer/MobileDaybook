<template>
  <f7-page>
    <f7-navbar  back-link="" sliding>
      <f7-nav-center sliding style="text-align:center">Mobile Daybook</f7-nav-center>
      <!-- &nbsp; &nbsp; &nbsp;  -->
      <f7-nav-right>
      <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
        <div class="block-title" style="text-align:center"><h4>Instructions/Consignes/Taches</h4></div>
        <ul >
          <li v-for="task in tasks" >
            <p>{{ task.user_task_title }}</p>
            <p>{{ task.user_task_body }}</p>
          </li>
        </ul>
  </f7-page>
</template>
<script>
import moment from 'moment';
import 'moment/locale/fr';
  // import SwipeButton from './SwipeButton.vue';
  // import VuePullRefresh from 'vue-pull-refresh'
  // import { VueHammer } from 'vue2-hammer'
  // this.Vue.use(VueHammer)
  // this.$$(.deleted-callback).on('swipeout:deleted', function () {
  //   window.alert('Thanks, item removed!')
  // })
  export default {
    data () {
      return {
        tasks: [],
        hasOwnProperty: Object.prototype.hasOwnProperty,
        daybookCreated: Boolean
      }
    },
    name: "instructions",
    swipeout: {
      noFollow: true,
      removeElements: true
    },
    computed: {
    },
    created () {
      moment.locale('fr');
      // console.log(this.$device)
      if (this.isEmpty(this.tasks)) {
          this.onRefresh()
      } else {
          this.tasks = JSON.parse(window.localStorage.getItem('tasks'))
      }
    },
    mounted () {
      // debugger
      // if (!this.isEmpty(this.tasks)) {
      //   this.tasks = JSON.parse(window.localStorage.getItem('tasks'))
      // } else {
      //   this.onRefresh()
      // }
    },
    components: {
      // f7Navbar,
      // f7Page,
      // f7BlockTitle
      // 'vue-pull-refresh': VuePullRefresh,
      // 'vueHammer': VueHammer
      // SwipeButton,
    },
    methods: {
      // saveChange: function (){
      //   alert()
      // },
      displayData: function () {
        if (this.isEmpty(this.tasks)) {
          this.onRefresh()
        } else {
          this.tasks = JSON.parse(window.localStorage.getItem('tasks'))
        }
      },
      onRefresh: function () {
      const self = this;
      let params = JSON.parse(window.localStorage.getItem('f7form-params'));
      let baseUrl = params.baseUrl;
      let username = params.username;
      let uid = params.uid;
      let password = params.password;
      let enc = window.btoa(username + ':' + password);
      let encString = 'Basic ' + enc
      let token = window.localStorage.getItem('csrfToken');
      let taskEndpoint = baseUrl + '/api/tasks/' + uid;
      // + '?_format=hal_json'
      debugger;
      let fetchTasks = {
        method: 'GET',
        headers: {
          'Authorization': encString,
          'X-CSRF-Token': token,
          'Accept': 'application/hal+json',
          'Content-Type': 'application/hal+json'
        }
      }
      window.fetch(taskEndpoint, fetchTasks)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      }).then(function (data) {
        return self.saveDaybookData(data)
      }).catch(function (error) {
        console.log(error)
      });
      },
      saveDaybookData (tasks) {
        const self = this
        self.tasks = self.tasks || [];
        let currentDate = moment().startOf('day');
        for (let task in tasks) {
          if (tasks.hasOwnProperty(task)) {
            let startDate = moment(tasks[task].user_task_start_shift, 'YYYY-MM-DD');
            let duration = moment.duration(currentDate.diff(startDate)).asDays();
            if (duration === 0) {
                tasks[task].user_task_body = tasks[task].user_task_body.replace(/<\/?[^>]+(>|$)/g, "");
                //replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') ;
                self.tasks.push(tasks[task]);
            }
          }
        }
        window.localStorage.setItem('tasks', self.tasks) ;
      },
      isEmpty (obj) {
        // null and undefined are "empty"
        if (obj == null) {
          return true
        }
        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if (obj.length > 0) {
          return false
        }
        if (obj.length === 0) {
          return true
        }
        // If it isn't an object at this point
        // it is empty, but it can't be anything *but* empty
        // Is it empty?  Depends on your application.
        if (typeof obj !== 'object') {
          return true
        }
        // Otherwise, does it have any properties of its own?
        // Note that this doesn't handle
        // toString and valueOf enumeration bugs in IE < 9
        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            return false
          }
        }
        return true
      }
    }
  };
</script>
<style scoped>
  .alert {
    background-color: lightgreen;
    width:100%;
    height: 30px;
  }
  .site-block {
    color: red;
  }
  li {
  margin: 8px 0;
}

  .odd {
   color:white;
   background:blue;
  }

  .even {
   color:blue;
   background: white;
  }

  .container {
  margin-top:20px;
  font-size: 20px;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  }
  .row {
    margin-bottom: 10px;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.swipe-button {
  width: 400px;
  margin: 0 auto;
  background-color: #17255A;
  border: 1px solid #17255A;
}
</style>