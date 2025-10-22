# ShareVolume

ShareVolume is a static web application that fetches and displays the outstanding shares of a company from the SEC API. This application is designed to work seamlessly as a static website.

## Features
- Fetches data from the SEC API for a specified company CIK.
- Displays the entity name, maximum, and minimum shares outstanding.
- Supports dynamic updates based on query parameters.

## Getting Started

### Prerequisites
- A modern web browser.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sharevolume.git
   cd sharevolume
   ```
2. Open `index.html` in your web browser.

### Usage
- Open `index.html` directly in your browser to view the default data for Ball Corporation.
- You can specify a different CIK by appending `?CIK=XXXXXXXXXX` to the URL, where `XXXXXXXXXX` is the 10-digit CIK of the company.

### Files
- `index.html`: The main HTML file that displays the data.
- `style.css`: The CSS file for styling the application.
- `src/app.js`: The JavaScript file that handles data fetching and DOM manipulation.
- `data.json`: The JSON file containing the fetched data.
- `uid.txt`: A text file containing a unique identifier.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## Acknowledgments
- This project uses the SEC API for fetching company data.

## Author
- Your Name
