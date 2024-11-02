<h1 align="center">URL Shortening Service</h1>

<p> A straightforward application that transforms lengthy URLs into concise, shareable links, built with <a href="https://expressjs.com/">Express.js</a>. </p>

## Documentation

The URL Shortening Service provides comprehensive API documentation via Swagger. You can access the documentation by navigating to the following endpoint in your browser after the application is running:

**Swagger Docs**: [http://localhost:3030/api-docs](http://localhost:3030/api-docs)

This interactive documentation allows you to explore the available endpoints, their parameters, and responses, making it easier to understand how to integrate with the service.

## Getting Started

### Using Docker Compose

1. **Clone the repository**:
    ```bash
    git clone git@github.com:GabrielMorettii/teddy-url-shortener.git
    cd teddy-url-shortener
    ```

2. **Set up the `.env` file**:
   Create a `.env` file in the root directory, and populate it with the required environment variables. You can find examples in the provided `.env.example` file.

3. **Start the application with Docker**:
    ```bash
    docker-compose up -d --build
    ```

   This command will compile the Docker images and initiate the application along with any necessary services like the database.

### Manual Installation

1. **Clone the repository**:
    ```bash
    git clone git@github.com:GabrielMorettii/teddy-url-shortener.git
    cd teddy-url-shortener
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and configure the necessary environment variables as outlined in the `.env.example` file.

4. **Generate database schemas**:
    ```bash
    npx prisma generate
    ```

5. **Deploy the database migrations**:
    ```bash
    npx prisma migrate deploy
    ```

6. **Launch the application**:
    ```bash
    npm run dev
    ```

## Postman Collection

A Postman collection is available in the root of the project to facilitate testing the API endpoints. You can import this collection into Postman and create a new environment with the following variable:

- `BASE_URL=http://localhost:3030`

This environment variable ensures the requests are directed to the correct base URL for local testing.

## Design Patterns

This project applies a range of design patterns to build a flexible, modular, and maintainable architecture. Each pattern has been selected to address specific challenges and ensure that the code remains scalable and adaptable to future changes.

* Factory
* Adapter
* Composite
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Singleton

##

<div align="center">
  <a href="https://www.linkedin.com/in/gabriel-morettii/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Gabriel%20Moretti-%49c31b"></a>

</div>
