# forum-react

Just a web forum made with React and TypeScript, and styled with TailwindCSS.

## Running the Application

To run the application, just run the following command in your terminal from the root application directory:

```bash
npm run start
```

## Running Unit Tests

To run the unit tests for the application, run the following command in your terminal from the root application directory:

```bash
npm run test
```

And to view test coverage:

```bash
npm run test -- --coverage
```

## Building the Application for Production

To build the application for production (this process will perform steps such as minification, etc), run the following:

```bash
npm run build
```

After this, the production-ready version of the application can be found under the *build* directory, and the content within this directory should then be moved to a server to be deployed to be accessible.
