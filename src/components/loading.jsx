import React from 'react'
import './loading.css'

export default function Loading({ progress }) {
  return (
    <div className="loading-overlay">
      <div className="loading-bar">
        <div
          className="loading-bar__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
