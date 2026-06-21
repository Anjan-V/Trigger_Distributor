# Trigger Distributor Website

This is a modern, responsive website built for Trigger Distributor, a school supplies distribution business based in Thrissur District, Kerala.

## Technologies Used
- React
- Vite
- React Router DOM
- Lucide React (for icons)
- Vanilla CSS (for custom styling and design system)

## Key Features
- **Responsive Design**: Mobile-first design perfectly adapted for phones, tablets, and desktops.
- **Modern Aesthetics**: A professional color palette combining Navy Blue, Royal Blue, White, and Gold accents.
- **Micro-Animations**: Smooth slide-ups and fade-ins for better user experience.
- **WhatsApp Integration**: Floating quick-contact WhatsApp button.
- **Component Based**: Clean, reusable React components (`ProductCard`, `ReviewCard`, etc.).

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Structure
- `src/components`: Reusable UI elements (Header, Footer, Cards).
- `src/pages`: Distinct application views (Home, About, Products, etc.).
- `src/assets`: Images and static resources.

## Deployment
The app can be easily deployed to services like Vercel, Netlify, or Firebase Hosting by running the build command and uploading the `dist` folder.


## Rules for Firebase
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{reviewId} {
      allow read: if true;

      allow create: if
        request.resource.data.keys().hasOnly([
          'name',
          'school',
          'rating',
          'comment',
          'delay',
          'createdAt'
        ]) &&
        request.resource.data.name is string &&
        request.resource.data.school is string &&
        request.resource.data.comment is string &&
        request.resource.data.delay is string &&
        request.resource.data.rating is number &&
        request.resource.data.rating >= 1 &&
        request.resource.data.rating <= 5 &&
        request.resource.data.createdAt is timestamp &&
        request.resource.data.comment.size() <= 500;

      allow update, delete: if false;
    }
  }
}