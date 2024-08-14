# London Onboarding Service Booking

## Overview

This project is a web-based application that allows users to book onboarding services when arriving in London. The application offers three exclusive packages — Silver, Gold, and Platinum — designed to enhance the travel experience by providing services such as airport meet and greet, transportation, mobile SIM cards, and more. Users can select a package and book a service through an integrated Calendly widget.

## Features

- **Package Selection**: Users can choose from three distinct packages: Silver, Gold, and Platinum.
  - **Silver Package**: Virtual support and route planning.
  - **Gold Package**: Airport meet and greet, public transport pickup, SIM card, Oyster card, and UK bank account support.
  - **Platinum Package**: Chauffeured pickup, SIM card, Oyster card, and UK bank account support.
- **Additional Benefits**: All packages include a curated list of London attractions, WhatsApp support, and currency exchange services.
- **Seamless Booking**: Integrated with Calendly, allowing users to book their services directly from the application.

## Project Structure

- **`src/Components/Booking.jsx`**: The main component handling the package selection and booking process.
- **`src/Components/CalendlyWidget.jsx`**: A dedicated component for rendering the Calendly widget.
- **`src/Components/Packages/Packages.jsx`**: The component displaying the available packages.
- **`src/Components/Packages/Packages.css`**: Styles for the package display.
- **`src/Components/Booking.css`**: Styles for the overall booking layout and Calendly widget.

## Setup and Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/london-onboarding-service.git
   cd london-onboarding-service
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Then, install the required dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

4. **Build for Production**:
   To create a production-ready build:
   ```bash
   npm run build
   ```

## Usage

1. **Choose a Package**:
   - Navigate to the homepage, where the Silver, Gold, and Platinum packages are displayed.
   - Each package provides details about the services included.

2. **Book a Service**:
   - Click the "Book Now" button under the desired package.
   - The Calendly widget will appear, allowing you to select an available time slot and book the service.

3. **Additional Services**:
   - Each package comes with additional benefits like a list of top attractions in London and WhatsApp support for up to one month.

## Contributing

Contributions are welcome! If you have any ideas or improvements, please submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
