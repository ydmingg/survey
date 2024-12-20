<template>
    <router-view></router-view>
</template>
  
<script>
import {RouterLink,RouterView} from "vue-router"
import SurveyHome from './pages/index.vue'
  
export default {
    name: 'App',
    components: {
        SurveyHome
    }
}
</script>
