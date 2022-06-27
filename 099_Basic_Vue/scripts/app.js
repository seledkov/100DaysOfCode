const TodosApp = {
  data() {
    return {
      todos: [],
      enteredTodoText: '',
      editedTodoId: null,
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();

      //this is possible because the 'this' keyword is actually kind of tricky in javascript. it can be bound to all kinds of things and here vue binds in to the object returned inside of 'data()'
      // this.newTodo = this.enteredTodoText;

      if (this.editedTodoId) {
        // upd
        const todoId = this.editedTodoId;
        const todoIndex = this.todos.findIndex(function (item) {
          return item.id === todoId;
        });
        const updatedTodo = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText,
        };

        this.todos[todoIndex] = updatedTodo;
        this.editedTodoId = null;
      } else {
        const newTodo = {
          text: this.enteredTodoText,
          id: Math.random(),
        };
        this.todos.push(newTodo);
      }

      this.enteredTodoText = '';
    },
    startEditTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find(function (item) {
        return item.id === todoId;
      });
      this.enteredTodoText = todo.text;
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(function (item) {
        return item.id !== todoId;
      });
    },
  },
};

// connect to html main block
Vue.createApp(TodosApp).mount('#todos-app');
