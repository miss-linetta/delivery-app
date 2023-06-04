## Getting Started

To get started with the app, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/miss-linetta/delivery-app.git
   ```

2. Navigate to the server directory:

   ```shell
   cd ./server
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Create an environment file and add the required variables. For example, create a `.env` file in the server directory and add the following:

   ```plaintext
   PORT=3000
   CONECTION_URL=<your-connection-url>
   ```

   Replace `<your-connection-url>` with the actual connection URL for your database.

5. Start the server:

   ```shell
   npm run dev
   ```

6. Open another terminal window and navigate to the client directory from the root directory:

   ```shell
   cd ./client
   ```

7. Install the dependencies:

   ```shell
   npm install
   ```

8. Start the client development server:

   ```shell
   npm run dev
   ```

9. Open your browser and visit [http://localhost:3001](http://localhost:3001) to see the app running.

Make sure you have Node.js and npm installed on your machine before starting the development servers.
