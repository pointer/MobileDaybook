<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Mobile Daybook</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar bottom>
      <f7-link></f7-link>
      <f7-link></f7-link>
    </f7-toolbar>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/instructions/" title="Consignes"></f7-list-item>
      <f7-list-item link="/punchclock/" title="Prise/Fin de service"></f7-list-item>
      <f7-list-item link="/daybook/" title="Main courante"></f7-list-item>
      <f7-list-item link="/incident/" title="Rapport"></f7-list-item>
      <f7-list-item link="/mydocuments/" title="Mes documents"></f7-list-item>
      <!-- <f7-list-item link="/operations/" title="Exploitations"></f7-list-item> -->
    </f7-list>
    <f7-block-title>Configuration</f7-block-title>
      <!-- <p>Entrer les données de configuration dans cette page</p> -->
    <f7-list>
      <f7-list-item link="/parameters/" title="Parametres"></f7-list-item>
    </f7-list>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Connect</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
}
</script>
