<template>
  <f7-page>
    <f7-navbar title="Vacations"></f7-navbar>
    <f7-block strong>
      <p>Les vacations vont etre dans le calendrier</p>
    </f7-block>
    <f7-block-title></f7-block-title>
    <f7-list>
      <!-- <f7-list-item link="/parameters/" title="Parametres"></f7-list-item> -->
      <f7-list-item link="/activities/" title="Calendrier"></f7-list-item>
    </f7-list>
    <!-- <f7-block-title>Charger la page dans la vue principale</f7-block-title>
    <f7-list>
      <f7-list-item link="/activities/" title="Vacations" view="#main-view" panel-close></f7-list-item>
    </f7-list> -->
  </f7-page>
</template>
<script>
import routes from '../routes.js'
export default {}
</script>