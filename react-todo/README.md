# React Todo App

A functional Todo List application built with React and tested with Jest and React Testing Library. This project focuses on state management, component architecture, and automated testing.

## Features
- **Add Todos**: Quickly add new tasks to your list.
- **Toggle Completion**: Click on a task to mark it as completed (visually represented by a line-through style).
- **Delete Todos**: Remove individual tasks with a single click.
- **Automated Testing**: Comprehensive unit tests to ensure all functionality works as expected.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/EmmaAtom00/alx-fe-reactjs.git
   cd react-todo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm start
```
The app will be available at `http://localhost:3000`.

### Running Tests
Execute the test suite using Jest:
```bash
npm test
```

## Educational Resource
For a step-by-step guide on how to build and test this project from scratch, please refer to [LESSON.md](./LESSON.md).

## Project Structure
- `src/TodoList.jsx`: Main logic and state management.
- `src/AddTodoForm.jsx`: Component for adding new items.
- `src/__tests__/TodoList.test.js`: Unit tests for all core features.
