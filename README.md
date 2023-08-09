# RickAndMortyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development Server

To run the development server, follow these steps:

1. Make sure you have Node.js and Angular CLI installed on your machine.
2. Open a terminal window and navigate to the project's root directory.
3. Run `npm install` to install the project's dependencies.
4. Run `ng serve` to start the development server.
5. Open your web browser and navigate to `http://localhost:4200/`. The application will automatically reload if you make any changes to the source files.

## Code Scaffolding

You can use the Angular CLI to generate new components, services, and more. For example, to generate a new component, you can run `ng generate component component-name`.

## Build

To build the project, you can run `ng build`. The build artifacts will be stored in the `dist/` directory.

## Server Configuration

This project includes a server that allows you to create and retrieve characters for the Rick and Morty app. The server is implemented using Express.js and is used to simulate the creation and retrieval of characters from a JSON file.

To run the server, navigate to the project's root directory and open a terminal window. Run the following command:

```bash
node server.js
```

The server will start and listen on `http://localhost:3000/`. It has two main endpoints:

1. **GET `/characters`**: Retrieve a list of characters from the JSON file.

2. **POST `/characters`**: Create a new character and store it in the JSON file.

## AWS Integration

[https://main.d1xhaafsrsj4ko.amplifyapp.com/]

## Further Help

For more help with the Angular CLI, you can use the `ng help` command or refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
