<template>
  <div class="comment">
    <div>
      <div class=""><b>Email: </b> {{ comment.email }}</div>
      <div class=""><b>Content: </b> {{ comment.body }}</div>
    </div>
    <div>
      <my-button class="btn btn-danger" @click="$emit('remove', comment)" >Delete</my-button>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
