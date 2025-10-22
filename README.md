# Unlimit-Inspired Ecommerce Frontend

A modern, responsive ecommerce website built with React and Tailwind CSS, inspired by the Unlimit.com design aesthetic. This application features a video hero section, interactive slider components, and a comprehensive product showcase.

## 🚀 Features

### Core Requirements ✅
- **Preview Video Component**: Auto-playing, muted video at the top of the page
- **Interactive Slider**: Information slider with hover effects and 1-second transition delays
- **React + Tailwind CSS**: Modern tech stack for optimal performance and styling
- **Unlimit-Inspired Design**: Clean, professional UI matching the reference website's aesthetic

### Additional Features
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Navigation**: Sticky header with smooth scroll effects
- **Product Showcase**: Interactive product cards with hover animations
- **Statistics Section**: Impressive business metrics display
- **Professional Footer**: Comprehensive footer with newsletter signup
- **Smooth Animations**: CSS transitions and hover effects throughout

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.1.6
- **Build Tool**: Create React App
- **Fonts**: Inter (Google Fonts)
- **Icons**: Unicode emojis for simplicity

## 📦 Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Design Features

### Video Hero Section
- Auto-playing background video (muted by default)
- Gradient overlay for text readability
- Animated call-to-action buttons
- Scroll indicator animation

### Interactive Slider
- 4 feature cards with hover animations
- 1-second transition delays as requested
- Scale and color transformations on hover
- Progress indicators at the bottom

### Color Scheme
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Purple and teal gradients for variety

### Typography
- **Font Family**: Inter (modern, professional)
- **Hierarchy**: Clear heading sizes and weights
- **Readability**: Optimal line heights and spacing

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind's responsive breakpoints (sm, md, lg, xl)
- **Navigation**: Collapsible mobile menu
- **Grid Layouts**: Responsive grid systems throughout

## 🎯 Component Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with scroll effects
│   ├── VideoHero.js       # Auto-playing video section
│   ├── InfoSlider.js      # Interactive hover slider
│   ├── ProductShowcase.js # Product cards grid
│   └── Footer.js          # Comprehensive footer
├── App.js                 # Main application component
├── index.js               # React DOM entry point
└── index.css              # Tailwind CSS imports
```

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `build` folder contents
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 🎥 Video Implementation

The video component uses a sample video from Google's test videos. In production, replace the video source in `VideoHero.js` with your own video file:

```javascript
<source
  src="your-video-url.mp4"
  type="video/mp4"
/>
```

## 🔧 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content
Update the content in each component file:
- Product information in `ProductShowcase.js`
- Slider content in `InfoSlider.js`
- Company information in `Footer.js`

## 📊 Performance

- **Optimized Build**: Production build with code splitting
- **Image Optimization**: Responsive images with proper sizing
- **CSS Purging**: Tailwind CSS purges unused styles
- **Lazy Loading**: Components load efficiently

## 🎨 Animation Details

All animations follow the requested specifications:
- **Hover Effects**: 1-second transition delays
- **Smooth Scrolling**: CSS scroll-behavior
- **Transform Animations**: Scale, translate, and opacity effects
- **Staggered Animations**: Sequential loading effects

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with ❤️ using React and Tailwind CSS