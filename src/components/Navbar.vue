<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <my-button @click="showModal" class="btn btn-primary">Add comment</my-button>
  </nav>
</template>

<script>
export default{
    props:{
        showModal: {
            type: Function,
        }
    }
}
</script>