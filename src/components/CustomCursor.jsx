import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorHover = (e) => {
      const isHoverable = e.target.closest('a, button, input[type="submit"]')
      setIsHovering(!!isHoverable)
    }

    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseover', updateCursorHover)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseover', updateCursorHover)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isHovering ? 'custom-cursor--hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
      }}
    />
  )
}

export default CustomCursor 