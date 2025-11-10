# 🎓 Tech Knots LMS - Learning Management System

A modern MERN stack web application for online learning with secure user authentication and course management.

## 🚀 Live Demo

Frontend: Live on Netlify (deployment details to be added)

## 🎯 Project Overview

Tech Knots LMS is an educational platform designed to help students access courses, track learning progress, and engage with educational content. The platform features secure user authentication, course browsing, and a personalized dashboard.

## 🛠️ Tech Stack

### Frontend

- **React.js** - UI library for building interactive interfaces
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Supabase** - Backend-as-a-Service for authentication and data

### Backend

- **Supabase** - Authentication, database, and storage
- **Node.js** - Runtime environment (via Supabase functions)

## ✨ Key Features

### Authentication & Security

✅ Secure user registration with email validation
✅ Login system with credential verification
✅ OAuth integration (Google, GitHub)
✅ Session management with token handling
✅ Protected routes and middleware

### User Interface

✅ Professional navigation bar with logo
✅ Explore dropdown for course categories
✅ Search functionality for courses
✅ Responsive design for all devices
✅ Modern, clean design with glassmorphism effects
✅ Mobile-responsive layout

### User Features

✅ Personalized dashboard after login
✅ Profile management
✅ Course enrollment tracking
✅ Secure logout functionality

## 🔐 Security Implementation

### Authentication

- Supabase Auth handles secure user authentication
- OAuth integrations for Google and GitHub
- Protected routes using React Context
- Automatic session management

## 📁 Project Structure

```
client/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── SocialLogin.jsx
│   ├── lib/
│   │   └── supabaseClient.js
│   ├── pages/
│   │   ├── ContactPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ExplorePage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── SignupPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js
```

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tech-knots-lms.git
cd tech-knots-lms/client
```

### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Create .env file with Supabase credentials
# Add the following variables:
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Start the development server
npm run dev
```

The frontend will run on http://localhost:5173

## 🎨 Design System

### Color Palette

- **Primary Green**: #00FF88 (accent color)
- **White**: #FFFFFF (background)
- **Gray**: #CFCFCF (secondary text)
- **Dark Gray**: #1A1A1A (card backgrounds)

### UI Components

- Glassmorphism effects on cards and navbar
- Smooth hover animations
- Card-based layouts
- Responsive grid system

## 🔄 Workflow

User Opens App → Landing Page
↓
Clicks Login/Signup → Authentication
↓
Credentials Verified → JWT Created
↓
Token Stored → Redirect to Dashboard
↓
User Browses Courses → Protected Route Checked
↓
Click Logout → Token Removed → Redirect to Home

## 📈 Future Enhancements

- Course progress tracking
- Video course player
- Certificate generation
- Admin dashboard for managing courses
- Real-time notifications

## 🐛 Known Issues

Currently, there are no known issues. If you find any bugs, please open an issue on GitHub.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Developer

Vinay

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Project developed as part of educational initiative
- Design inspired by modern educational platforms
- Color palette and theme provided by TechKnots Academy
- Built with best practices in web security and user experience

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
