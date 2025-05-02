import React, { useEffect, useRef } from "react";
import "./interactive.css";
import albumArt from "/src/images/blue-can.png";

export default function Lofi() {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
ß
  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function animate() {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgba(255,255,255,0.5)`;
        ctx.fillRect(i * 3, canvas.height - barHeight, 2, barHeight);
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="lofi-page">
      <canvas ref={canvasRef} className="lofi-visualizer"></canvas>
      <div className="lofi-info">
        <img src={albumArt} alt="album" />
        <h2>Dreamscape</h2>
        <p>by LofiBoi</p>
      </div>
      <audio ref={audioRef} controls autoPlay loop src="/placeholder.mp3"></audio>
    </div>
  );
}
