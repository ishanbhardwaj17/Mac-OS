import React from "react"
import MacWindow from "./MacWindow"
import Terminal from "react-console-emulator"
import "./cli.scss"

const Cli = ({windowName,setWindowState}) => {
  const commands = {
    about: {
      description: "About me",
      fn: () =>
        "I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies."
    },
    skills: {
      description: "List technical skills",
      fn: () => `Frontend: React, Vanilla JS, Sass
Backend: Node.js, Express, Python
Databases: MongoDB, PostgreSQL
Tools: Git, Docker, Vite`
    },
    projects: {
      description: "View my projects",
      fn: () => `1. Portfolio Website
2. E-commerce Platform
3. Chat Application`
    },
    github: {
      description: "Open GitHub",
      fn: () => {
        window.open("https://github.com", "_blank")
        return "Opening GitHub..."
      }
    },
    echo: {
      description: "Echo text",
      fn: (...args) => args.join(" ")
    }
  }

  const welcomeMessage = `
╔════════════════════════════════════╗
║   Welcome to IshanBhardwaj CLI    ║
╚════════════════════════════════════╝

Type "help" to see available commands.
`

  return (
    <MacWindow windowName = "cli" setWindowState={setWindowState} title="Terminal" width={700} height={450}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="IshanBhardwaj:~$"
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
