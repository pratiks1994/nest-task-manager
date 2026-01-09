## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# 🧩 NestJS Task Management Backend

A clean, modular **NestJS backend** demonstrating best practices such as **DTO validation**, **separation of concerns**, **feature modules**, and **in-memory persistence**.

This project manages **Users** and **Tasks** as independent modules, with tasks optionally assigned to users.

---

## 🚀 Features

- Modular NestJS architecture
- Users and Tasks as independent domains
- In-memory data store (easily replaceable with DB)
- DTO-based request validation
- Clean Controller → Service → Store layering
- Scalable filtering via query parameters
- Production-style folder structure

---

## 🏗 Architecture Overview

HTTP Request
↓
Controller (Routing)
↓
Service (Business Rules)
↓
Store (Persistence / Defaults)

## Key Design Principles

- **Controllers** handle HTTP only
- **Services** contain business logic
- **Stores** act as repositories (in-memory)
- **DTOs** define API contracts and validation
- **Domain types** represent stored state

---

## 📦 Domain Models

### Task

```ts
export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number | null;
};
```

### User

```ts
export type User = {
  id: number;
  name: string;
};

## 📌 API Endpoints

### 👤 Users

| Method | Endpoint        | Description              |
|-------:|-----------------|--------------------------|
| POST   | `/users`        | Create a new user        |
| GET    | `/users`        | Get all users            |
| GET    | `/users/:id`    | Get user by ID           |

---

### ✅ Tasks

| Method | Endpoint                         | Description                           |
|-------:|----------------------------------|---------------------------------------|
| POST   | `/tasks`                         | Create a new task                     |
| GET    | `/tasks`                         | Get all tasks                         |
| GET    | `/tasks/:id`                     | Get task by ID                        |
| PATCH   | `/tasks/:id/assign-user/:userId`| Assign task to a user                 |
| PATCH  | `/tasks/:id`                     | Mark task as completed / incomplete   |
| DELETE | `/tasks/:id`                     | Delete a task                         |

---


```
