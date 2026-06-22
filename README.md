## Trigger Distributors

A modern and responsive business website developed for Trigger Distributors. The platform provides customers with easy access to company information, products, services, customer reviews, and contact details through an intuitive and user-friendly interface.

## Features
   Responsive and mobile-friendly design
   Product and service showcase
   Customer review and feedback system
   Interactive charts and analytics
   Contact and enquiry section
   PDF export functionality
   Firebase Firestore integration
   Modern and intuitive user interface
   
## Technology Stack
   ## Frontend
      React 18
      Vite
      React Router DOM
      HTML5
      CSS3
      JavaScript (ES6+)
   ## Data & Visualization
      Chart.js
      React ChartJS 2
   ## Backend Services
      Firebase Firestore
   ## Additional Libraries
      Lucide React
      jsPDF
      
## Installation
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   npm install
   npm run dev
   
## Production Build
   npm run build
   
## Project Objectives
   Establish a professional online presence
   Improve customer engagement
   Showcase products and services effectively
   Collect and display customer feedback
   Provide easy access to business information
   
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

  ## Author
Anjan V
B.Tech Artificial Intelligence and Data Science
Saranathan College of Engineering, Tiruchirappalli
}
