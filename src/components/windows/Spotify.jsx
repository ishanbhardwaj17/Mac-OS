import React from "react"
import MacWindow from "./MacWindow"
import "./spotify.scss"

const Spotify = () => {
  return (
    <MacWindow title="Spotify" width={400} height={520}>
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </MacWindow>
  )
}

export default Spotify
