# TypeScript Clean Architecture with Dependency Injection

This repository showcases an example of structuring a modern web application using the Clean Architecture pattern in TypeScript. Leveraging the power of Dependency Injection (DI) through `tsyringe`, it provides a robust foundation that encourages SOLID principles, resulting in a system that's scalable, maintainable, and testable.

## Key Features:

- **Entity Layer**: At its core are the business rules and entities. This layer is framework agnostic and remains independent.
- **Use Cases (or Application Layer)**: This layer orchestrates the flow of data to and from the entities, housing application-specific business rules and offering a clean API to the outer layers.
- **Interface Adapters (or Infrastructure Layer)**: These adapters transform data from the format most convenient for use cases and entities to that which is most suitable for external services like databases or the web.
- **Frameworks and Drivers (or Presentation Layer)**: Here you'll find all the I/O components – be it the web server, databases, etc.
- **Dependency Injection**: With the use of `tsyringe`, the project promotes inversion of control, making the system more modular and making unit testing a breeze.

## Benefits:

1. **Independence**: Each component, whether it's business rules, web servers, or databases, can evolve independently of the others.
2. **Flexibility**: The separation of concerns ensures the application remains pluggable and adaptable.
3. **Testability**: Business logic can be tested in isolation, without the need for UI, databases, web servers, or other external elements.
4. **Decoupled Design**: Thanks to `tsyringe`, the application components are decoupled, fostering a design where pieces can be swapped or replaced with minimal friction.

## How to contribute?
Clon or fork this project.

## Setup & Run:
\```bash
# Install dependencies
npm install

# Start the application
npm start

# Start the application in dev mode
npm run dev
\```



## Contributions:
Your feedback and contributions are invaluable. Feel free to fork this repository, submit issues, or provide pull requests.
