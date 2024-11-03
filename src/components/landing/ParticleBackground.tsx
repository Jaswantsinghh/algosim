"use client"
import { useEffect } from "react"

function ParticleBackground()  {
    useEffect(() => {
      const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d')
      
      if (!ctx) return
  
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
  
      const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
      const particleCount = 100
  
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5
        })
      }
  
      function drawParticles() {
        if(!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        particles.forEach((particle) => {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
  
          particle.x += particle.speedX
          particle.y += particle.speedY
  
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
        })
        requestAnimationFrame(drawParticles)
      }
  
      drawParticles()
  
      const handleResize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  
    return <canvas id="particle-canvas" className="absolute top-0 left-0 w-full h-full" />
  }
  
  export default ParticleBackground