# Step-by-Step Guide: Building and Testing a React Todo List

This guide provides a comprehensive, step-by-step approach to building a functional Todo List in React and ensuring its quality with automated tests.

---

## Phase 1: Project Setup

### 1. Initialize the Project
Create a new React application using `create-react-app`.
```bash
npx create-react-app react-todo
cd react-todo
```

### 2. Install Testing Dependencies
Ensure you have the necessary libraries for testing components.
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### 3. Configure Test Script
Open `package.json` and ensure the `test` script is set to use `jest`.
```json
"scripts": {
  "test": "jest"
}
```

---

## Phase 2: Building the Components

### 1. Create the AddTodoForm Component
Create `src/AddTodoForm.jsx`. This component handles the input field and submission.
```jsx
import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
```

### 2. Create the TodoList Component
Create `src/TodoList.jsx`. This is the core component managing the state and item logic.
```jsx
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

## Phase 3: Writing Automated Tests

### 1. Setup Testing Environment
Create `src/setupTests.js` to include the matchers for Jest.
```javascript
import '@testing-library/jest-dom';
```

### 2. Create the Test File
Create a `src/__tests__` directory and add `TodoList.test.js`.

#### Test Case 1: Initial Render
```javascript
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component and initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
```

#### Test Case 2: Adding a Todo
```javascript
import { fireEvent } from '@testing-library/react';

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);
  
  expect(screen.getByText('New Task')).toBeInTheDocument();
});
```

#### Test Case 3: Toggling and Deleting
```javascript
test('toggles and deletes a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  
  // Toggle
  fireEvent.click(todoItem);
  expect(todoItem.parentElement).toHaveStyle('text-decoration: line-through');
  
  // Delete
  const deleteBtn = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteBtn);
  expect(todoItem).not.toBeInTheDocument();
});
```

---

## Phase 4: Verification
Run your tests to ensure everything is working correctly.
```bash
npm test
```

## Summary
You now have a fully functional, tested React Todo application. By following this step-by-step approach, you ensure that each functionality is verified and that your codebase remains maintainable.
