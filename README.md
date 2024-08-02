# Technically Speaking

## This is the Project Repository for Technically Speaking

## Getting Started

To get started with this project, follow these steps:

Clone the repository to your local machine:
bash
git clone https://github.com/technically-speaking/technically-speaking.git

### or

git clone git@github.com:technically-speaking/technically-speaking.git

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Copy the .env.example file to .env.local and fill in the values for your local development environment.
Make sure your local instances of PostgreSQL and MongoDB are running. Alternatively, you can use Docker Compose to run these services locally. Ensure you have Docker installed and running.
To run the Docker Compose, you can right-click on the docker-compose.yml file and select one of the following options:

- Compose up: This will build and start the Docker containers for the project.
- Compose down: This will stop and remove the Docker containers for the project.
- Compose restart: This will restart the Docker containers for the project.

Alternatively, you can run the following commands in the terminal:
Start the Docker containers:

```bash
npm run docker-up
# or
yarn docker-up
# or
pnpm docker-up
# or
bun docker-up
```

Stop the Docker containers:

```bash
npm run docker-down
# or
yarn docker-down
# or
pnpm docker-down
# or
bun docker-down
```

Once you have everything set up, you can start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Happy coding! 😄

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Create a pull request to the main repository

Please ensure your code follows the project's coding style and includes appropriate tests.

## License

This project is licensed under the MIT License.
