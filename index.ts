import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/10';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((res) => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  })
  .catch((err) => console.log(err));

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with the ID: ${id}
    Has a title of : ${title}
    Is it finsihed? ${completed}
  `);
};
