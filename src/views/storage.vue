<template>
    <v-sheet>
        sss
        <v-btn @click="write">write</v-btn>
    </v-sheet>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    async write () {
      const sn = await this.$firebae.storage().ref().chile('xxx.text').putString('abcd')
      const url = await sn.ref.getDownloadURL()
      console.log(url)
    }
  }
}
</script>
