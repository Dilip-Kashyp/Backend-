# E-commerce Backend

**Description:**
This project is a backend server for an e-commerce application. It provides endpoints for managing products, user authentication, and image uploads.

**Dependencies:**
- Express: For creating the server and handling routes.
- CORS: To enable cross-origin resource sharing.
- Mongoose: For interacting with MongoDB.
- JSONWebToken: For user authentication.
- Multer: For handling file uploads.

**Installation:**
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Install dependencies:
   ```
   npm install
   ```

**Usage:**
1. Start the server:
   ```
   npm start
   ```
2. Endpoints:
   - **/ping**: Check server availability.
   - **/upload**: Endpoint for uploading images.
   - **/**: Main endpoint for handling product-related operations.
   - **/addProduct**: Endpoint for adding a new product (alias for `/`).
   - **/allProduct**: Endpoint for retrieving all products.
   - **/removeProduct**: Endpoint for removing a product.
   - **/signup**: Endpoint for user registration.
   - **/login**: Endpoint for user authentication.

**Code Analysis:**

1. **Dependencies**: The code requires Express, CORS, Mongoose for MongoDB interaction, JWT for user authentication, and Multer for handling file uploads.

2. **Database Connection**: It connects to a MongoDB database hosted on MongoDB Atlas.

3. **Middleware**: The Express app uses middleware for parsing JSON requests and enabling CORS.

4. **Ping Endpoint**: A simple endpoint ("/ping") is provided to check server availability.

5. **Routes**: Three separate route files are included:
   - **dataBase.js**: Defines routes for product management, user authentication (signup and login), and displaying products.
   - **imageUpload.js**: Handles file uploads, providing an endpoint for uploading images.

6. **Product Management Routes**:
   - POST `/`: Add a new product to the database.
   - POST `/removeProduct`: Remove a product from the database.
   - GET `/`: Retrieve all products from the database.
   - POST `/signup`: Register a new user.
   - POST `/login`: Authenticate a user.
   - POST `/addProduct`: Add a new product to the database (alias for `/`).

7. **Image Upload Route**:
   - POST `/upload`: Upload an image file to the server.

***Configuration:***
- MongoDB Connection: Configure MongoDB connection string in `routes/dataBase.js`.
- JWT Secret: Set the JWT secret key in `routes/dataBase.js`.
- File Upload Destination: Images will be uploaded to the `upload/image` directory.

***Contributing:***
- Fork the repository.
- Make your changes.
- Create a pull request.
