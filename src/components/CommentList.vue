<template>
  <div v-if="comments.length > 0">
    <h3>Comments</h3>
    <comment-item
      class="comment"
      v-for="comment in comments"
      v-bind:key="comment.id"
      :comment="comment"
      @remove="$emit('remove', comment)"
    >
    </comment-item>
  </div>
  <div v-else>
    <h2>no comments</h2>
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue'
export default {
    components: {
        CommentItem
    },
    props: {
            comments: {
                type: Array,
                required: true
            }
        }
};
</script>

<style scoped>
.comment {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
