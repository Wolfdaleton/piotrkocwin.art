# Portfolio Website

This project is a simple portfolio website inspired by Indexhibit. It dynamically generates subpages based on the folder structure inside the `subsites` directory. Each subdirectory within `subsites` represents a project, and the photos contained in these folders are displayed on the corresponding subpages.

## Project Structure

```
portfolio-website
├── src
│   ├── main.ts          # Entry point of the application
│   ├── style.css        # Styles for the portfolio website
│   ├── components
│   │   └── Gallery.tsx  # React component for displaying images
│   ├── subsites         # Directory containing project subdirectories
│   └── utils
│       └── subsitesLoader.ts # Utility for loading subsites
├── public
│   └── index.html       # Main HTML file
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the portfolio website.

## Usage

- To add a new project, create a new folder inside the `src/subsites` directory.
- Place your photos inside the newly created folder.
- The website will automatically generate a subpage for the new project, displaying the images in a grid layout.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.