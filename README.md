# AI Hire Hub 🚀

AI Hire Hub is an **AI-powered freelance project management platform** that helps clients convert simple project ideas into structured development milestones and collaborate efficiently with freelancers.

The platform reduces the **trust gap between clients and freelancers** by using AI to plan projects, assign milestones, manage communication, and simulate payments through a wallet system.

---

# 🌟 Features

## 🤖 AI Project Planner

Clients can enter a simple project idea, and AI automatically converts it into structured development milestones.

Example:

**Input**

```
Build a food delivery app
```

**AI Output**

```
1. Design UI
2. Build backend API
3. Setup database
4. Implement ordering system
5. Deploy application
```

This helps turn vague ideas into **clear development tasks**.

---

## 👨‍💻 Freelancer Hiring

Clients can browse freelancers and see their **skill scores**.

The client selects one freelancer for the project, and **all milestones are automatically assigned to that freelancer**.

---

## 📋 Project Workspace

After hiring a freelancer, a **workspace panel** opens where the client can:

* View project milestones
* See assigned freelancer
* Track milestone deadlines
* Monitor project progress

---

## 💬 Chat System

The workspace includes a **chat feature** where the client and freelancer can communicate during the project.

---

## 💰 Wallet System

Clients can recharge their wallet before hiring freelancers.

This simulates a **payment or escrow system** commonly used in freelance platforms.

---

# 🧠 Problem Statement

Freelance platforms often face issues such as:

* Unclear project requirements
* Miscommunication between clients and freelancers
* Difficulty breaking projects into tasks

These issues lead to delays and failed collaborations.

---

# 💡 Solution

AI Hire Hub solves this by allowing clients to:

1. Enter a project idea
2. Automatically generate project milestones using AI
3. Hire freelancers based on their skill score
4. Manage milestones and deadlines in a workspace
5. Communicate using a built-in chat system
6. Manage funds through a wallet system

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## AI Integration

* Groq API
* LLaMA Model

---

# 📂 Project Structure

```
ai-hire-hub
│
├── frontend
│   ├── app
│   │   ├── ai
│   │   ├── hire
│   │   ├── workspace
│   │   └── wallet
│   └── components
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   └── server.js
```

---

# ⚙️ Installation

## 1. Clone the Repository

```
git clone https://github.com/yourusername/ai-hire-hub.git
```

---

## 2. Install Dependencies

### Backend

```
cd backend
npm install
```

### Frontend

```
cd frontend
npm install
```

---

## 3. Environment Variables

Create a `.env` file inside the **backend** folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

---

## 4. Run the Project

Start backend:

```
npm run dev
```

Start frontend:

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 🎥 Demo Flow

1. Client enters a project idea
2. AI generates development milestones
3. Client saves the project
4. Client hires a freelancer
5. Workspace opens with milestones and deadlines
6. Client and freelancer communicate through chat
7. Wallet handles project funds

---

# 🚀 Future Improvements

* AI freelancer quality evaluation
* AI milestone progress tracking
* Smart escrow payment system
* Real-time notifications
* Live chat using WebSockets

---

# 👨‍💻 Author

**Rohan Keshri**

B.Tech Computer Science Engineering
Web Developer | AI Enthusiast

---

# ⭐ Acknowledgements

* Groq AI
* LLaMA Models
* Next.js Community
* Open Source Contributors
