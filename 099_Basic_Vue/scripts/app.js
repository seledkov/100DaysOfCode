const TodosApp = {
  data() {
    return { newTodo: 'first todo', enteredTodoText: '' };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();

      //this is possible because the 'this' keyword is actually kind of tricky in javascript. it can be bound to all kinds of things and here vue binds in to the object returned inside of 'data()'
      this.newTodo = this.enteredTodoText;
      this.enteredTodoText = '';
    },
  },
};

// connect to html main block
Vue.createApp(TodosApp).mount('#todos-app');
