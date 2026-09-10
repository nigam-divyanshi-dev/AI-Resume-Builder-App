# 🚀 AI Resume Builder – Full Stack Application

![React](https://img.shields.io/badge/REACT.JS-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/EXPRESS.JS-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Gemini AI](https://img.shields.io/badge/GEMINI%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![ImageKit](https://img.shields.io/badge/IMAGEKIT-3A86FF?style=for-the-badge)

An AI-powered full-stack Resume Builder that helps users create professional, ATS-friendly resumes quickly. The application provides customizable resume templates, AI-powered content enhancement, resume parsing, profile management, and public resume sharing.

**Live Deployment:** [https://ai-powered-interview-preparation-re.vercel.app/login](https://ai-resume-builder-app-liart.vercel.app/)

**GitHub Repository:** [https://github.com/nigam-divyanshi-dev/AI-Resume-Builder-App](https://github.com/nigam-divyanshi-dev/AI-Resume-Builder-App)

## 🌟 Features

* 🔐 **User Authentication**

  * User registration and login
  * JWT-based authentication
  * Protected API routes
  * Password hashing using bcrypt

* 📝 **Resume Builder**

  * Create and edit resumes
  * Personal information
  * Professional summary
  * Skills
  * Work experience
  * Education
  * Projects
  * Customizable resume colors

* 🤖 **AI-Powered Resume Enhancement**

  * Improve professional summaries
  * Enhance job descriptions
  * Generate ATS-friendly content
  * Extract resume information automatically using AI

* 📄 **Resume Upload & Parsing**

  * Upload an existing resume
  * Extract resume text
  * AI-based information extraction
  * Automatically populate resume fields

* 🎨 **Multiple Resume Templates**

  * Classic
  * Modern
  * Minimal
  * Minimal Image

* 🖼️ **Profile Image Processing**

  * Image upload using ImageKit
  * Automatic image transformation
  * Face-focused image cropping
  * Optional background removal

* 🌐 **Public Resume Sharing**

  * Generate a public resume view
  * Share resumes through a public URL

* 📱 **Responsive Interface**

  * Modern React UI
  * Responsive design
  * Toast notifications
  * Loading states

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Redux Toolkit
* React Redux
* React Router
* Axios
* Lucide React
* React Hot Toast
* React PDF to Text

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Multer
* CORS
* dotenv

### AI & Cloud Services

* Google Gemini API through OpenAI-compatible API
* ImageKit

---

## 📂 Project Structure

```text
AI-Resume-Builder-Full-Stack/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   └── store.js
│   │   │
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── templates/
│   │   │   ├── ColorPicker.jsx
│   │   │   ├── EducationForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── PersonalInfoForm.jsx
│   │   │   ├── ProfessionalSummaryForm.jsx
│   │   │   ├── ProjectForm.jsx
│   │   │   ├── ResumePreview.jsx
│   │   │   └── SkillsForm.jsx
│   │   │
│   │   ├── configs/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Preview.jsx
│   │   │   └── ResumeBuilder.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   │   ├── ai.js
│   │   ├── db.js
│   │   ├── imageKit.js
│   │   └── multer.js
│   │
│   ├── controllers/
│   │   ├── aiController.js
│   │   ├── resumeController.js
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Resume.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   ├── resumeRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd AI-Resume-Builder-Full-Stack
```

---

### 2. Setup Backend

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` directory:

```env
JWT_SECRET=your_jwt_secret

MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key

OPENAI_API_KEY=your_gemini_api_key
OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
OPENAI_MODEL=gemini-2.5-flash

PORT=3000
```

> **Note:** `OPENAI_API_KEY` is used for the Gemini API key because the project accesses Gemini through its OpenAI-compatible API endpoint.

Start the backend:

```bash
npm run server
```

For production:

```bash
npm start
```

The backend will run on:

```text
http://localhost:3000
```

---

### 3. Setup Frontend

Open a new terminal and navigate to the client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_BASE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 🔑 Required Services

### MongoDB

Create a MongoDB database and obtain the connection string.

Add it to:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Google Gemini

Create a Gemini API key and add it as:

```env
OPENAI_API_KEY=your_gemini_api_key
```

The application uses Gemini through:

```env
OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
```

### ImageKit

Create an ImageKit account and obtain your private key.

Add:

```env
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | `/api/users/register` | Register a new user    |
| POST   | `/api/users/login`    | Login user             |
| GET    | `/api/users/data`     | Get authenticated user |
| GET    | `/api/users/resumes`  | Get user's resumes     |

### Resume

| Method | Endpoint                        | Description       |
| ------ | ------------------------------- | ----------------- |
| POST   | `/api/resumes/create`           | Create a resume   |
| PUT    | `/api/resumes/update`           | Update resume     |
| DELETE | `/api/resumes/delete/:resumeId` | Delete resume     |
| GET    | `/api/resumes/get/:resumeId`    | Get user's resume |
| GET    | `/api/resumes/public/:resumeId` | Get public resume |

### AI

| Method | Endpoint                   | Description                    |
| ------ | -------------------------- | ------------------------------ |
| POST   | `/api/ai/enhance-pro-sum`  | Enhance professional summary   |
| POST   | `/api/ai/enhance-job-desc` | Enhance job description        |
| POST   | `/api/ai/upload-resume`    | Parse uploaded resume using AI |

---

## 🔐 Authentication Flow

The application uses **JWT authentication**.

1. User registers or logs in.
2. Server validates credentials.
3. Server generates a JWT token.
4. Frontend stores the token.
5. Protected requests send the token.
6. Authentication middleware verifies the token.
7. Authorized users can access their resumes and AI features.

Passwords are securely hashed using **bcrypt** before being stored.

---

## 🤖 AI Workflow

The AI functionality is integrated using Google's Gemini model through an OpenAI-compatible API.

### Professional Summary

User enters a professional summary → AI analyzes the content → AI generates an improved, concise and ATS-friendly summary.

### Job Description

User enters a job description → AI improves the description using action-oriented language and focuses on responsibilities and achievements.

### Resume Parsing

```text
Resume Upload
      ↓
Extract Resume Text
      ↓
Send Text to Gemini
      ↓
AI Extracts Structured Data
      ↓
Parse JSON Response
      ↓
Create Resume in MongoDB
      ↓
Populate Resume Builder
```

---

## 🎨 Resume Templates

The application includes multiple professionally designed templates:

* **Classic Template**
* **Modern Template**
* **Minimal Template**
* **Minimal Image Template**

Users can customize their resume and preview the selected template before sharing it.

---

## 🔒 Environment Variables

Never commit your real `.env` files to GitHub.

Example:

### Server `.env`

```env
JWT_SECRET=
MONGODB_URI=
IMAGEKIT_PRIVATE_KEY=
OPENAI_API_KEY=
OPENAI_BASE_URL=
OPENAI_MODEL=
PORT=3000
```

### Client `.env`

```env
VITE_BASE_URL=
```

Make sure `.env` is included in `.gitignore`.

---

## 🚀 Deployment

The application can be deployed using services such as:

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas
* **Images:** ImageKit
* **AI:** Google Gemini API

For deployment, update the frontend environment variable:

```env
VITE_BASE_URL=https://your-backend-url.com
```

And configure the required backend environment variables in your hosting platform.

---

## 🧠 What I Learned

This project helped me gain practical experience with:

* Full-stack application development
* React component architecture
* REST API development
* Express.js
* MongoDB & Mongoose
* JWT authentication
* Password hashing
* Protected routes
* Redux Toolkit
* File uploads with Multer
* ImageKit integration
* AI API integration
* Resume parsing
* AI prompt engineering
* Environment variables
* Frontend-backend integration
* Full-stack deployment

---

## 🔮 Future Improvements

* 📊 ATS score calculation
* 🎯 Job description-based resume optimization
* 💼 Job application tracking
* 📄 More professional resume templates
* 📥 Resume PDF download improvements
* 🔗 Custom resume URLs
* 🌍 Multi-language resume generation
* 📈 Resume analytics
* 🤖 AI-powered career recommendations

---

## 👩‍💻 Author

**Divyanshi Nigam**

B.Tech Student | Full-Stack Developer | AI Enthusiast

### Connect With Me

* GitHub: [https://github.com/nigam-divyanshi-dev](https://github.com/nigam-divyanshi-dev)
* LinkedIn: [https://www.linkedin.com/in/divyanshi-nigam-56902528a/](https://www.linkedin.com/in/divyanshi-nigam-56902528a/)

---

## ⭐ Show Your Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!


