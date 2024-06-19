### Rai's DICOM Image Viewer

## Overview

Rai's DICOM Image Viewer is a full-stack application developed to upload and view DICOM files. This project was created to get familiar with various full-stack tools and technologies, including Nest.js for the backend and React.js for the frontend. The application allows users to upload DICOM files and view them through a web interface. It handles file parsing, storage, and rendering, integrating several technologies to achieve this functionality.

## Features

- Upload DICOM files via a web interface
- Parse and extract relevant information from DICOM files
- View DICOM images in the browser
- User-friendly interface with Material-UI components

## Technologies Used

- **Backend**: Nest.js, Multer, dicom-parser, zod
- **Frontend**: React.js, Redux, React Hook Form, Material-UI, cornerstone-core, cornerstone-tools
- **State Management**: Redux Toolkit

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/raihanvaheed/RaiDicomViewer.git
   cd RaiDicomViewer
   ```

2. **Install dependencies for the backend and frontend:**

   ```bash
   # Navigate to backend and install dependencies
   cd backend
   npm install

   # Navigate to frontend and install dependencies
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   npm run start
   ```

2. **Start the frontend server:**

   ```bash
   cd ../frontend
   npm start
   ```

3. **Open the application in your browser:**

   Navigate to `http://localhost:3001` in your web browser.


## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
