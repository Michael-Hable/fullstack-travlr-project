# Travlr Project (CS-465 Full Stack)

This is a web application built for a course assignment using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The setup instructions provided in this guide are intended for use on Windows systems only.

## Table of Contents

- [Project Setup](#project-setup)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Viewing the Site](#viewing-the-site)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Credits](#credits)

---

## Project Setup

Before you begin, make sure you have the following installed on your system:

- [Git](https://git-scm.com/downloads)
- [Node.js (LTS version)](https://nodejs.org/en/download/)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community)

> MongoDB Compass is also recommended for database visualization.

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Michael-Hable/fullstack-travlr-project.git
   cd fullstack-travlr-project
   ```

2. **Install Dependencies**
    
    ```bash
    npm install
    ```
    
3. Run audit to check for known vulnerabilities:
    
    ```bash
    npm audit
    ```
    
4. Fix issues:
    
    ```bash
    npm audit fix --force
    ```
    

---

## Running the Application

1. Set the environment variable and start the server for the first time:
    
    ```bash
    set DEBUG=travlr:* 
    npm start
    ```
    
2. If prompted by the firewall, allow access.
	
3. After the initial set up you can start npm using just:
	
    ```bash
    npm start
    ```

---

## Viewing the Site

Once the server is running, open your browser and navigate to:

http://localhost:3000

---

## Troubleshooting

- **Script permissions issue?**  
    If you encounter script execution errors in PowerShell, run:
    
    ```powershell
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
    

---

## Credits

Project setup and guidelines based on SNHU’s CS-465 Full Stack Development course materials.
