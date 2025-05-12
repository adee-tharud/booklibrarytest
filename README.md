# 📚 Book Wise

An interactive book library app built with **React**, **Redux Toolkit**, **Ant Design**, and **JSON Server**.

---

## 🚀 Features

- Browse, add, edit, delete books
- Search by title or author with debounce
- Toggle grid/list views
- Responsive layout (mobile to desktop)
- Mock API with JSON Server

---

## 🛠️ Tech Stack

- React 19
- Redux Toolkit
- Ant Design 5
- Axios
- JSON Server (mock backend)
- Vite (build tool)

---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/book_wise.git
cd book_wise
```

### 2. Install dependencies

```bash
npm install
```

---

## 🖥️ Running the App

### Start frontend (Vite)

```bash
npm run dev
```

This will start the app at [http://localhost:5173](http://localhost:5173) (or similar port shown in terminal).

### Start backend (JSON Server)

```bash
npm run server
```

This starts the mock API at [http://localhost:3001/books](http://localhost:3001/books)

> ℹ️ The `db.json` file contains mock book data and serves as your backend.

```bash
json-server --watch db.json --port 3001
```

---

## 📁 Project Structure

```
book_wise/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── store/
│   └── App.jsx
├── db.json
├── package.json
└── README.md
```

---

## ✅ Available Scripts

| Script       | Command           | Description                      |
| ------------ | ----------------- | -------------------------------- |
| Start App    | `npm run dev`     | Start React app with Vite        |
| Start Server | `npm run server`  | Start JSON server at port 3001   |
| Lint         | `npm run lint`    | Run ESLint                       |
| Build        | `npm run build`   | Build for production             |
| Preview      | `npm run preview` | Preview production build locally |

---

## 📮 API Endpoints

All endpoints use: `http://localhost:3001/books`

- `GET /books` — Get all books
- `POST /books` — Add a new book
- `PUT /books/:id` — Update a book
- `DELETE /books/:id` — Delete a book

---
