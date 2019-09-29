<template lang="pug">
  ul(class="list")
    li(class="list-item") {{ client }}
</template>

<script>
  export default {
    props: ["client"]
  }
</script>
