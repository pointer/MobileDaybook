<template>
      <!-- <f7-view>
        <f7-pages> -->
  <f7-page mydocuments-screen>
  <f7-navbar  back-link="" sliding>
    <!-- <f7-nav-center sliding style="text-align:center">Mobile Daybook</f7-nav-center> -->
    <!-- &nbsp; &nbsp; &nbsp;  -->
    <f7-nav-right>
    <f7-link icon="icon-bars" open-panel="right"></f7-link>
    </f7-nav-right>
  </f7-navbar>
    <div class="block-title" style="text-align:center" ><h4>Mes documents</h4></div>
            <ul >
              <li v-for="(document,index) in documents" :key="index"  >
                <div class = "item-inner">
                  <div class="item-title" v-html="document.document_title" > </div>
                    <div class="item-after">
                      <f7-col>
                        <f7-button  v-on:click="downloadFile($event)" v-html="document.document_doc">document.document_title fill color="green">Green</f7-button>
                      </f7-col>
                        <!-- <f7-list>
                          <f7-list-button v-on:click="downloadFile($event)" v-html="document.document_doc">document.document_title>
                          </f7-list-button>
                        </f7-list> -->
                     </div>
                    <!-- <div class="item-after"  @click.native="downloadFile($event)" v-html="document.document_doc" > -->
                         <!-- <a href=document.document_doc download><i class="fa fa-download" aria-hidden="true"></i></a> -->
                         <!-- <button v-on:click="downloadFile($event)" v-html="document.document_doc">document.document_title</button>
                    </div> -->
                  </div>
              </li>
            </ul>
</f7-page>
        <!-- </f7-pages>
      </f7-view> -->
</template>

<script>
// import FormData from 'FormData'
// import FileReader from 'FileReader'
// import Canvas  from 'Canvas'
import Blob from 'blob'
import VueRouter from 'vue-router'
export default {
  data () {
    return {
      documents: [],
      baseUrl: '',
      docTitle: ''
    }
  },
  components: {
    'vue-router': VueRouter
  },
  created () {
  },
  mounted () {
    this.getDocumentList();
    // const self = this;
    // let params = JSON.parse(window.localStorage.getItem('f7form-params'));
    // let baseUrl = params.baseUrl;
    // let endPoint = baseUrl + '/' + 'document-list';
    // console.log(endPoint);
    // let ref = cordova.InAppBrowser.open(endPoint, '_blank', 'location=no,toolbar=yes');

    // let baseUrl = window.localStorage.getItem('baseUrl')
    // let endPoint = baseUrl + '/user-documents-list'
    // // let route = self.$router.r.resolve({path: endPoint})
    // // this.VueRouter.$router.push({path: endPoint})
    // debugger
    // window.location.href = endPoint
    // // const router = new VueRouter()
    // // router.push(endPoint)
    // // let route = router.resolve({path: endPoint})
    // // window.open(router.href, '_self')
  },
  methods: {
    getDocumentList: function () {
      const self = this
      let params = JSON.parse(window.localStorage.getItem('f7form-params'));
      self.baseUrl = params.baseUrl;
      let username = params.username;
      let uid = params.uid;
      let documentList = params.documentList;
      let password = params.password;
      let enc = window.btoa(username + ':' + password);
      let encString = 'Basic ' + enc
      let token = window.localStorage.getItem('csrfToken');
      let endPoint = self.baseUrl + '/api/' + documentList;
      // ?_format=hal_json'
      let fetchTasks = {
        method: 'GET',
        headers: {
          'Authorization': encString,
          'X-CSRF-Token': token,
          'Accept': 'application/hal+json',
          'Content-Type': 'application/hal+json'
        }
      }
      window.fetch(endPoint, fetchTasks)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(function (data) {
        // console.log(data);
        return self.saveDocumentList(data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    saveDocumentList (data) {
      const self = this
      try {
        for (let item in data) {
          if (data.hasOwnProperty(item)) {
            // console.log(data[item].document_doc);
            // data[item].title = data[item].title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, ' ')
            data[item].document_title = data[item].document_title.replace(/<\/?[^>]+(>|$)/g, '').trim()
            // if (data[item].document_doc.length) {
            //   let regex = /href="([^"]*)/
            //   if (data[item].document_doc.match(regex)[1]) {
            //     data[item].document_doc = data[item].document_doc.replace(regex, 'href="' + self.baseUrl + '$1')
            //     console.log(data[item].document_doc);
            //   }
            }
          }
        // window.localStorage.setItem(self.documents, JSON.parse(data))
        self.documents = data;
      } catch (error) {
        console.debug(error.message);
      }
      // self.documents = data
    },
    processStatus: function (response) { // process status
      if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error('Error loading: '))
        // + url))
      }
    },
    parseBlob: function (response) {
      return response.blob()
    },
    parseJson: function (response) {
      return response.json()
    },
    // download/upload
    downloadFile: function (event) {
      const self = this;
      // if (event) {
      //  // window.alert(event.target.href)
      //   return window.fetch(event.target.href)
      //     .then(self.processStatus)
      //     .then(self.parseBlob)
      // }
      // self.baseUrl = window.localStorage.getItem('baseUrl')
      debugger;
      let endPoint = event.target.href
      // let regex = /href="([^"]*)/
      // if (endPoint.match(regex)[1]) {
      //   endPoint = endPoint.replace(regex, 'href="' + self.baseUrl + '$1')
      //   console.log(endPoint);
      // }

      self.docTitle = event.target.innerText
      // let username = window.localStorage.getItem('username')
      // let uid = window.localStorage.getItem('uid')
      // let password = window.sessionStorage.getItem('password')
      // let enc = window.btoa(username + ':' + password)
      // let encString = 'Basic ' + enc
      // let token = window.localStorage.getItem('csrfToken')
      let fetchTasks = {
        method: 'GET',
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/pdf, application/txt',
          'Accept': 'text/html, application/xhtml+xml, application/xml, application/txt, application/pdf;q=0.9, image/webp, */*;q=0.8'
        }
      }
      window.fetch(endPoint, fetchTasks)
      .then(r => r.blob())
      .then(self.showFile)
      // .then(response => {
      //   // Create a Blob from the PDF Stream
      //   const file = new Blob(
      //   [response.data],
      //   {type: 'application/pdf'})
      //   // Build a URL from the file
      //   const fileURL = window.URL.createObjectURL(file)
      //   // Open the URL on new Window
      //   window.open(fileURL)
      // })
      .catch(error => {
        console.log(error)
      })
    },
    showFile (blob) {
      const self = this
      // It is necessary to create a new blob object with mime-type explicitly set
      // otherwise only Chrome works like it should
      let newBlob = new Blob([blob], {type: 'application/pdf'})
      // Create a link pointing to the ObjectURL containing the blob.
      const data = window.URL.createObjectURL(newBlob)
      let link = document.createElement('a')
      link.href = data
      link.download = self.docTitle
      link.click()
      // setTimeout(function() {
      //   // For Firefox it is necessary to delay revoking the ObjectURL
      //   window.URL.revokeObjectURL(data)
      //   , 100}
    }
  }
}
</script>