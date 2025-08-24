# 🎭 MeMe Generator

A fun and interactive web application that allows users to create custom memes by adding text overlays to popular meme templates. Built with React and Vite, this app fetches meme templates from the Imgflip API and provides an intuitive interface for meme creation.

## ✨ Features

- **Random Meme Templates**: Get new meme templates with a single click
- **Custom Text Overlay**: Add top and bottom text to your memes
- **Real-time Preview**: See your meme changes as you type
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface

## 🚀 Live Demo

[Add your live demo link here when deployed]

## 🛠️ Technologies Used

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: CSS3
- **API**: Imgflip Meme API
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd MeMe-Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📖 Usage

1. **Generate Random Meme**: Click the "Get New MeMe Images" button to load a random meme template
2. **Add Top Text**: Type your desired text in the "Top Text" input field
3. **Add Bottom Text**: Type your desired text in the "Bottom Text" input field
4. **Preview**: Your meme will update in real-time as you type
5. **Create New**: Click the button again to get a completely different meme template

## 🏗️ Project Structure

```
MeMe-Generator/
├── public/                 
│   ├── Akshay-Kumar-Meme-templates-15.jpeg
│   ├── Meme-Face-PNG-Picture.png
│   └── vite.svg
├── src/                   
│   ├── component/         
│   │   ├── Header.jsx     
│   │   └── MainContent.jsx 
│   ├── assets/            
│   ├── App.jsx            
│   ├── App.css            
│   ├── index.css          
│   └── main.jsx           
├── package.json           
├── vite.config.js         
└── README.md             
```

## 🎯 Key Components

### Header Component
- Displays the app logo and title
- Clean and simple navigation header

### MainContent Component
- Handles meme template fetching from Imgflip API
- Manages state for meme data (image URL, top text, bottom text)
- Provides input fields for custom text
- Renders the meme with text overlays

## 🔌 API Integration

The app integrates with the [Imgflip Meme API](https://imgflip.com/api) to fetch popular meme templates. The API provides:
- A vast collection of meme templates
- High-quality images
- Regular updates with new templates

## 📱 Responsive Design

The application is designed to work seamlessly across different screen sizes:
- Desktop: Full-featured experience with optimal layout
- Tablet: Adapted layout for medium screens
- Mobile: Touch-friendly interface with responsive design

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🎨 Customization

You can easily customize the app by:
- Modifying the CSS styles in `App.css` and `index.css`
- Adding new meme templates to the public folder
- Implementing additional text effects or filters
- Adding more meme generation features

**Happy Meme Making! 🎉**
