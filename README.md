# Webflow JavaScript Starter Template

This repository serves as a starter template for Webflow projects at Wonderup Agency. It provides a streamlined setup for writing, bundling, and deploying custom JavaScript and CSS code, with support for local development and production deployment via jsDelivr.

## Features
- **Rollup**: Bundles JavaScript with tree-shaking and module support.
- **PostCSS**: Processes CSS with modern features and optimizations.
- **Dynamic Component Loading**: Modular JavaScript components loaded based on data attributes.
- **Local Development Server**: Uses `http-server` for testing assets locally.
- **Production Builds**: Minified and optimized output with comments and console.logs removed.
- **CDN Integration**: Seamless deployment to jsDelivr for production use in Webflow.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)
- A Webflow project
- A GitHub repository for your project

## Getting Started

1. **Create a New Repository**
   - Use this template to create a new repository for your project on GitHub.

2. **Install Dependencies**
   - Clone the repository to your local machine.
   - Run the following command to install all required dependencies:
     ```bash
     npm install
     ```

3. **Local Development**
   - Start the development server and watch for changes:
     ```bash
     npm run dev
     ```
   - In a separate terminal, run the local HTTP server to serve your assets:
     ```bash
     npm run server
     ```
   - Copy the code from `webflow-snippet.html` and paste it into your Webflow project’s **Project Settings → Custom Code → Head**. Follow the instructions in the file to set up local asset URLs.

4. **Write Your Code**
   - Add your JavaScript components in the `components/` folder. Update `main.js` to include new components in the `components` array.
   - Add your CSS in the `styles/` folder (processed by PostCSS).
   - Test your changes locally using the development server.

5. **Build for Production**
   - When your code is ready, run the build script to format, minify, and optimize your code:
     ```bash
     npm run build
     ```
   - This will:
     - Format code with Prettier.
     - Bundle and minify JavaScript with Rollup and Terser.
     - Process and minify CSS with PostCSS.
     - Remove comments and console.logs from the output.

6. **Deploy Changes**
   - Commit your changes to the repository:
     ```bash
     git add .
     git commit -m "Your commit message"
     ```
   - Bump the version number (use `minor` or `patch` as needed):
     ```bash
     npm version minor
     ```
   - Push the changes and tags to GitHub:
     ```bash
     git push origin main --follow-tags
     ```

7. **Update Webflow**
   - In your Webflow project’s **Project Settings → Custom Code → Head**, update the `<link>` and `<script>` tags in the snippet to use the production CDN URLs from jsDelivr. Replace `*repo*` with your repository name and update the version number (e.g., `@1.0.1`) to match the latest release.
   - Example:
     ```html
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/wonderup-agency/your-repo@1.0.1/dist/styles.css">
     <script src="https://cdn.jsdelivr.net/gh/wonderup-agency/your-repo@1.0.1/dist/main.js" defer></script>
     ```

## Project Structure
- `main.js`: Entry point for JavaScript, handling dynamic component loading.
- `components/`: Directory for modular JavaScript components.
- `styles/`: Directory for CSS files, processed by PostCSS.
- `dist/`: Output directory for bundled and minified assets.
- `webflow-snippet.html`: Snippet for Webflow with instructions for local and production asset loading.
- `rollup.config.dev.js`: Rollup configuration for development.
- `rollup.config.prod.js`: Rollup configuration for production builds.

## Scripts
- `npm run dev`: Starts Rollup in watch mode for development.
- `npm run server`: Runs a local HTTP server to serve assets.
- `npm run build`: Builds production-ready assets (minified, optimized).
- `npm run format`: Formats all code with Prettier.

## Notes
- Always update the version number in the CDN URLs in Webflow after creating a new release. Failure to do so will result in Webflow loading an outdated build.
- The `webflow-snippet.html` file includes fallback logic to ensure assets load correctly even if the local server is unavailable during development.
- Keep the commented reference URLs in `webflow-snippet.html` for easy switching between local and production environments.

## License
This project is licensed under the ISC License. See the `package.json` for details.