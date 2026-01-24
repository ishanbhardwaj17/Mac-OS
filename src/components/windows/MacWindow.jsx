import React from "react"
import { Rnd } from "react-rnd"
import "./window.scss"

const MacWindow = ({ children, title = "ishanBhardwaj — zsh",width = "40vw", height = "40vh" }) => {
    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}
            minWidth={400}
            minHeight={300}
            bounds="parent"
            dragHandleClassName="nav"
            enableResizing={{
                bottom: true,
                right: true,
                bottomRight: true,
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                    </div>

                    <div className="title">{title}</div>
                </div>

                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
