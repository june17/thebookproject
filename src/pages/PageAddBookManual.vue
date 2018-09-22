<template>
    <div class="container">
      <form @submit.prevent="register" class="card card-form">
        <h1 class="text-center">Enter book details</h1>
        <div class="form-group">
          <label for="name">ISBN</label>
          <input v-model="form.isbn" type="text" class="form-input">
        </div>
        <div class="form-group">
          <label for="name">Book Title</label>
          <input v-model="form.bookTitle" type="text" class="form-input">
        </div>
        <div class="form-group">
          <label for="name">Book Subtitle</label>
          <input v-model="form.bookSubTitle" type="text" class="form-input">
        </div>
        <div class="form-group">
          <label for="name">Description</label>
          <input v-model="form.description" type="text" class="form-input">
        </div>
        <div class="form-group">
          <label for="name">Author</label>
          <input v-model="form.authorName" type="text" class="form-input">
        </div>
        <div class="form-group">
          <label for="name">Numbers</label>
          <input v-model="form.inventory" type="number" class="form-input">
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-blue btn-block">Register</button>
        </div>

      </form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form: {
                    isbn: null,
                    bookTitle: null,
                    bookSubTitle: null,
                    description: null,
                    authorName: null,
                    inventory: null
                }
            }
        },
        methods: {
            register () {
                console.log("add")
            }
        }
    }
</script>
