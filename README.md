# ToDo List Project

A simple and elegant ToDo List application built with **React.js**. This project helps users to organize their tasks effectively with features like adding, editing, deleting, and marking tasks as done. The app also includes a responsive design to ensure a great user experience on all devices.

---

## Features

1. **Add Tasks**: Users can add tasks to their ToDo list.
2. **Edit Tasks**: Modify the text of existing tasks.
3. **Delete Tasks**: Remove tasks from the list.
4. **Mark as Done**: Strike through tasks to indicate completion.
5. **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

---

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todolist-project.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd todolist-project
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

5. **Open in the browser**
   - Visit `http://localhost:5173` to view the app.

---

## Project Structure

```
📁 todolist-project
├── 📁 src
│   ├── 📁 assets        # Images or static assets
│   ├── 📄 App.jsx       # Main component
│   ├── 📄 Todoinput.jsx # Component for input field
│   ├── 📄 Todolist.jsx  # Component for displaying tasks
│   ├── 📄 App.css       # Styling file
├── 📄 package.json      # Dependency and script management
├── 📄 vite.config.js    # Configuration for Vite.js
```

---

## Technologies Used

- **Frontend**: React.js, JavaScript, HTML, CSS
- **Development Server**: Vite.js

---

## Features in Code

### Add Task
- **File**: `Todoinput.jsx`
- **Functionality**: Allows users to type a task in the input box and save it by pressing "Enter" or clicking the "Save" button.

### Edit Task
- **File**: `Todolist.jsx`
- **Functionality**: Users can modify existing tasks using an inline edit feature with an input box and a "Save" button.

### Mark as Done
- **File**: `Todolist.jsx`
- **Functionality**: Click on a task to toggle its completion status, with a line-through style indicating the task is done.

### Delete Task
- **File**: `Todolist.jsx`
- **Functionality**: Users can remove tasks using the trash icon.

---

## Responsive Design

- **Mobile Friendly**: Adjusts the layout and styles for smaller screens.
- **File**: `App.css`
- **Implementation**: Media queries for different screen sizes.

---

## Future Enhancements

1. Add a priority level to tasks.
2. Introduce categories or tags for better task organization.
3. Add a drag-and-drop feature to reorder tasks.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Acknowledgments

Designed and developed by **Vaishnavi Nalawade**.

