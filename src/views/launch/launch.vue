<script lang="ts">
import { defineComponent } from 'vue'
import { usegoogleStore } from '@/stores/google'

import Button from '@/components/button/button.vue'
import AnimatedLogo from '@/components/animated_logo/animated_logo.vue'

export default defineComponent({
  name: 'Launch',
  components: {
    Button,
    AnimatedLogo
  },
  props: {},
  emits: [],
  setup() {
    const gstore = usegoogleStore()
    gstore.loadGoogleApi()
    return {
      gstore
    }
  },
  methods: {
    launchApp: async function () {
      await this.gstore.authenticate()
      await this.gstore.loadSpreadsheet()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<template>
  <div class="launch">
    <AnimatedLogo class="logo"/>
    <Button
      id="authentbtn"
      v-if="gstore.isReady"
      :text="'Launch app'"
      v-on:click="launchApp"
    />
  </div>
</template>

<style lang="scss" scoped>
.launch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  align-content: space-around;
  
  .logo {
    height: 30%;
    margin-bottom: 10%;
  }
}
</style>
