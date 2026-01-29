# Denice Unite - Portfolio Website

This is a React-based personal portfolio website showcasing my skills, projects, and experience as a Full Stack Web Development student.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with warm color palette
- **Interactive Components**: Smooth navigation and animations
- **Project Showcase**: Display of my development projects with links to GitHub repositories
- **Contact Form**: Integrated contact functionality
- **Downloadable CV**: Direct download link for my resume

## Technologies Used

- **Frontend**: React, HTML5, CSS3, JavaScript
- **Icons**: React Icons
- **Fonts**: Google Fonts (Merriweather, Open Sans)
- **Deployment**: Docker, Nginx
- **Version Control**: Git, GitHub

## Docker Instructions

### Prerequisites
- Docker installed on your system
- Port 5575 available on your machine

### Building and Running the Container

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dunite2/finalproj.git
   cd finalproj
   ```

2. **Build the Docker image:**
   ```bash
   docker build -t unite_denice_coding_assignment14 .
   ```

3. **Run the container:**
   ```bash
   docker run -d -p 5575:5575 --name unite_denice_coding_assignment14 unite_denice_coding_assignment14
   ```

4. **Access the application:**
   Open your web browser and navigate to:
   ```
   http://localhost:5575
   ```

### Container Details

- **Container Name**: `unite_denice_coding_assignment14`
- **Working Directory**: `/unite_denice_final_site`
- **Port**: `5575`
- **Web Server**: Nginx serving production React build

### Stopping the Container

To stop the running container:
```bash
docker stop unite_denice_coding_assignment14
```

To remove the container:
```bash
docker rm unite_denice_coding_assignment14
```

### Troubleshooting

- **Port already in use**: Make sure port 5575 is not being used by another application
- **Build fails**: Ensure you have a stable internet connection for downloading dependencies
- **Container won't start**: Check Docker logs with `docker logs unite_denice_coding_assignment14`

## Development

To run the project in development mode:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Access at:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
finalproj/
├── public/                 # Public assets
├── src/
│   ├── assets/            # Images and files
│   ├── components/        # React components
│   │   ├── about/
│   │   ├── contacts/
│   │   ├── experience/
│   │   ├── footer/
│   │   └── header/
│   │   └── myprojects/
│   ├── App.jsx           # Main App component
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
├── Dockerfile            # Docker configuration
├── nginx.conf           # Nginx configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Contact

**Denice Unite**
- **GitHub**: [dunite2](https://github.com/dunite2)
- **Portfolio**: [Live Demo](https://dunite2.github.io/finalproj)

---

*This project was created as part of my Full Stack Web Development coursework, demonstrating proficiency in React, responsive design, Docker containerization, and modern web development practices.*

