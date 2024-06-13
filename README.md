# Random Quote Generator

## Description

The Random Quote Generator is a web application that fetches and displays random quotes. It allows users to generate new quotes and share them on Twitter. This project uses React for the frontend and Redux for state management.

## Features

- Displays a random quote and its author on initial load.
- Allows users to generate a new random quote by clicking a button.
- Provides a button to share the current quote on Twitter.
- The background color changes with each new quote.
- The app is fully responsive and centered on the screen.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Redux Thunk**: For handling asynchronous actions.
- **React Bootstrap**: For styling the components.
- **Tabler Icons**: For displaying icons.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ductmOfficial/random-quote-machine
```

2. Navigate to the project directory:

```bash
cd random-quote-machine
```

3. Install the dependencies:

```bash
yarn install
```

4. Start the development server:

```bash
yarn start
```

The app will be running at `http://localhost:3000`.

## Usage

- The app will display a random quote and its author upon loading.
- Click the "New Quote" button to fetch a new random quote.
- Click the Twitter icon to share the current quote on Twitter.

## Project Structure

- `src/`
  - `components/`: Contains the React components.
  - `redux/`
    - `actions.js`: Defines the actions for Redux.
    - `reducers.js`: Defines the reducers for Redux.
    - `store.js`: Configures the Redux store.
  - `App.js`: Main component of the app.
  - `index.js`: Entry point of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Tabler Icons](https://tablericons.com/)
