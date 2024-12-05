

# GoFood - Online Food Ordering and Management System 🍔🍕  

**GoFood** is an online platform that enables users to browse food items, place orders, and manage their cart seamlessly. Built using the MERN stack, it offers a responsive and user-friendly experience for food enthusiasts and restaurant owners alike.

---

## Features ✨  

- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT).  
- **Browse Food Categories**: Explore a wide range of food categories and items.  
- **Add to Cart**: Easily add, remove, and update items in your cart.  
- **Order Placement**: Simple and intuitive order placement workflow.  
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.  
- **Image Uploads**: Seamlessly integrate images for food items via Cloudinary.  

---

## Motivation 💡  

The project aims to digitize and streamline the food ordering process, enhancing user convenience while providing restaurant owners with tools to manage their offerings effectively.  

---

## Tech Stack 🛠  

1. **Frontend**:  
   - React.js  
   - Bootstrap (for styling and responsiveness)  

2. **Backend**:  
   - Node.js with Express.js  
   - MongoDB (Database)  

3. **Additional Tools**:  
   - **Cloudinary**: For image uploads and management.  
   - **bcrypt.js**: For secure password hashing.  
   - **express-validator**: For request validation.  

---

## Installation and Setup 🚀  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/deveshanurag/GOFOOD.git  
   cd gofood  
   ```  

2. **Backend Setup**:  
   ```bash  
   cd backend  
   npm install  
   ```  

3. **Environment Variables**:  
   Create a `.env` file in the backend directory and add the following:  
   ```env  
   MONGO_URI=your-mongodb-uri  
   JWT_SECRET=your-secret-key  
   CLOUDINARY_NAME=your-cloudinary-name  
   CLOUDINARY_API_KEY=your-cloudinary-api-key  
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret  
   ```  

4. **Start the Backend**:  
   ```bash  
   npm start  
   ```  

5. **Frontend Setup**:  
   ```bash  
   cd frontend  
   npm install  
   npm start  
   ```  

---

## Demo

Demo video:(open in incognito window):

https://drive.google.com/file/d/1eikwRX0RQKtaqg29lqlcPdjhsMWjtGBo/view?usp=sharing


Live Website:

https://gofood-frontend-gvr6.onrender.com/

## Usage 🖥  

1. Register and log in as a user.  
2. Browse through the food categories and select items to add to your cart.  
3. Place an order and receive real-time updates (if integrated).  
4. User can track the food orders

---

## Future Scope 🚀  

- **Real-Time Order Tracking**: Integrate WebSockets for live order updates.  
- **Payment Gateway Integration**: Add support for online payments.  
- **Ratings and Reviews**: Allow users to rate and review food items.  
- **Multi-Vendor Support**: Extend the platform to support multiple vendors.  

---
