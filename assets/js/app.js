import { TodoList } from './components/TodoLists.js';
import { fetchJSON } from './functions/api.js';
import { createElement } from './functions/dom.js';

// Utiliser TryCatch pour capturer l'erreur
try {
  // Chargement des differents elemts dans notre todoList
  const todos = await fetchJSON(
    'https://jsonplaceholder.typicode.com/todos?_limit=4'
  );
  // Construction d'une nouvelle TodoList
  const list = new TodoList(todos);
  list.appendTo(document.querySelector('#todolist'));
} catch (e) {
  const alertElement = createElement('div', {
    class: 'alert alert-danger m-2',
    role: 'alert',
  });
  alertElement.innerText = 'Impossible de charger les éléments';
  document.body.prepend(alertElement);
}
