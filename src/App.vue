<template>
  <div class="container">
    <!-- <h1>{{ message }}</h1>
        <p>Count: <strong>{{ count }}</strong></p>
        <button class="btn btn-success" v-on:click="increment">Increment</button>
        <button class="btn btn-warning ml-2" @click="decrement">Decrement</button> @ = v-on: -->

    <!-- <div class="comment">
      <div>
        <b>Name: <b>Samar</b></b>
      </div>
      <div>
        <b>Email: <b>Samar</b></b>
      </div>
      <div>
        <b
          >Content:
          <b
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptates amet perspiciatis non nisi aliquid at assumenda
            voluptate. Illum aliquam asperiores deleniti quasi commodi
            cupiditate consectetur ad corrupti! Praesentium, error!</b
          ></b
        >
      </div>
    </div> -->

    <button class="btn btn-warning" @click="fetchComments">
      Fetch Comments
    </button>

    <navbar :showModal="showModal"> </navbar>
    <my-modal v-model:show="modalVisible">
      <comment-form @addComment="createComment" />
    </my-modal>

    <comment-list
      v-if="!isLoading"
      :comments="comments"
      @remove="removeComment"
    />

    <div v-else>
      <span>Loading...</span>
    </div>
  </div>
</template>
<script>
import CommentForm from "./components/CommentForm.vue";
import CommentList from "./components/CommentList.vue";
import Navbar from "./components/Navbar.vue";
import axios from "axios";
export default {
  /// Exported components *************************************

  components: {
    CommentForm,
    CommentList,
    Navbar,
  },

  /// Data ///////////////////////////////////////////////

  data() {
    return {
      message: "Hello Vue",
      count: 0,
      modalVisible: false,
      comments: [],
      isLoading: false,
    };
  },

  /// Methods ################################################

  methods: {
    // increment() {
    //   this.count++;
    // },
    // decrement() {
    //   this.count--;
    // },

    createComment(comment) {
      this.comments.push(comment);
      this.modalVisible = false;
    },

    removeComment(comment) {
      this.comments = this.comments.filter((c) => c.id !== comment.id);
    },

    showModal() {
      this.modalVisible = true;
    },

    async fetchComments() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=10"
        );
        console.log(response.data);
        this.comments = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },

  /// Lifecycles $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  mounted() {
    this.fetchComments();
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
