<template>
  <input type="text" v-model="text" />
  <button @click="addNewTodo()" :disabled="isDisabled">Add Todo</button>
  <button @click="deleteDoneTodos()">Delete done Todos</button>
  <ul>
    <li v-for="todo of todos" :key="todo.id">
      <input
        type="checkbox"
        @change="changeTodo(todo.id)"
        v-model="todo.done"
      />{{ todo.description }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      todos: [],
    };
  },
  methods: {
    async addNewTodo() {
      if (this.text.length > 0) {
        const newTodo = {
          description: this.text,
          done: false,
        };
        await fetch("http://localhost:4730/todos", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newTodo),
        });
        this.todos.push(newTodo);
      }
      this.text = "";
    },
    async deleteDoneTodos() {
      for (let item of this.todos) {
        if (item.done) {
          await fetch("http://localhost:4730/todos/" + item.id, {
            method: "DELETE",
          });
          const currentIndex = this.todos.findIndex(
            (element) => element.id === item.id
          );

          this.todos.splice(currentIndex);
        }
      }
      /*this.todos.forEach(todo => {
        if (todo.done) {
          await fetch("http://localhost:4730/todos" + item.id, {
            method: "DELETE",
          });
        }
      })*/
    },
    async changeTodo(id) {
      for (let item of this.todos) {
        if (id === item.id) {
          const updatedTodo = {
            description: item.description,
            done: item.done,
          };
          await fetch("http://localhost:4730/todos/" + item.id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedTodo),
          });
        }
      }
    },
  },
  computed: {
    isDisabled() {
      return this.text.length === 0;
    },
  },
  mounted() {
    fetch("http://localhost:4730/todos")
      .then((response) => response.json())
      .then((data) => (this.todos = data))
      .catch((error) => console.log(error.message));
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
</style>
