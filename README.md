# Folder & task organiser

A simple folders + tasks web app built with vanilla HTML, CSS, and JavaScript. Create folders, select one, and add tasks with a date and priority. Tasks can be edited or deleted.

## Features

- Create folders
- Click a folder to select it (highlighted state)
- Add tasks (name, date, priority) to the selected folder
- Prevents adding tasks unless a folder is selected
- Edit tasks in a modal
- Delete tasks
- Hover + transform effects for folders and buttons

## How to run

1. Download or clone the project
2. Open `index.html` in your browser

No build tools or dependencies needed.

## How to use

1. Type a folder name and click **Add**
2. Click the folder to make it active
3. Fill in the task form (task name, date, priority) and click **Add**
4. Use **Edit** to update a task or **Delete** to remove it

If you try to add a task without selecting a folder, you’ll see an alert telling you to select a folder first.

## Project structure

- `index.html` – page structure (folders column, tasks column, modal)
- `styles.css` – layout and UI styling (borders, hover states, transforms)
- `script.js` – folder/task logic (rendering, filtering, modal edit)
