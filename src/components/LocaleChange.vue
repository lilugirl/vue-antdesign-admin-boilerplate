<template>

  <span class="locale-changer">
         切换语言 
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </span>
  


</template>

<script>


export default {
   data () {
    return { langs: ['zh','ja', 'en'] }
  },
  name: "LocaleChange"
};
</script>
