<template>
    <div class="tags-input">
      <div class="tags-container">
        <span v-for="(tag, index) in tags" :key="index" class="tag">
          {{ tag }}
          <button type="button" @click="removeTag(index)" class="tag-remove">
            &times;
          </button>
        </span>
        <input
          type="text"
          v-model="input"
          @keydown.enter.prevent="addTag"
          @keydown.backspace="handleBackspace"
          @blur="addTag"
          :placeholder="placeholder"
          class="tags-input-field"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tags: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: 'Añadir etiqueta'
      }
    },
    data() {
      return {
        input: ''
      }
    },
    methods: {
      addTag() {
        if (this.input.trim() && !this.tags.includes(this.input.trim())) {
          const newTags = [...this.tags, this.input.trim()]
          this.$emit('update:tags', newTags)
          this.input = ''
        }
      },
      removeTag(index) {
        const newTags = this.tags.filter((_, i) => i !== index)
        this.$emit('update:tags', newTags)
      },
      handleBackspace() {
        if (!this.input.length && this.tags.length) {
          this.removeTag(this.tags.length - 1)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .tags-input {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
  }
  
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tag {
    display: inline-flex;
    align-items: center;
    background-color: #e9ecef;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  
  .tag-remove {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 0.5rem;
    color: #6c757d;
  }
  
  .tags-input-field {
    flex: 1;
    min-width: 100px;
    border: none;
    outline: none;
    padding: 0.25rem;
  }
  </style>