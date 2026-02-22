# Form Handling in React

This project demonstrates the transition from using **Controlled Components** to using libraries like **Formik** and **Yup** for more robust form management in React.

## Features

- **Controlled Registration Form**: Manual state management using `useState`, custom validation, and event handling.
- **Formik Registration Form**: Advanced form handling using the `Formik` library, simplifying state and submission management.
- **Yup Validation**: Schema-based validation for consistent and declarative error handling in the Formik form.
- **Side-by-Side Comparison**: Both forms are rendered in the main application for easy comparison of the code and user experience.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository (or navigate to the project directory).
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:
```bash
   npm run dev
```

## Documentation

For a deeper dive into the concepts implemented in this project, check out the [Form Handling Guide](./FORM_HANDLING_GUIDE.md).

## Project Structure

- `src/components/RegistrationForm.jsx`: Implementation using manual controlled components.
- `src/components/formikForm.js`: Implementation using Formik and Yup.
- `src/App.jsx`: Main entry point rendering both form types.
