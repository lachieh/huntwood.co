"use client"

import { useEffect, useRef } from "react"

interface AdvancedTopographicalBackgroundProps {
  canvasBg?: string
  canvasFg?: string
}

export function AdvancedTopographicalBackground({
  canvasBg = "rgba(157, 174, 152, 0.8)",
  canvasFg = "#9DAE98"
}: AdvancedTopographicalBackgroundProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const initCanvas = async () => {
      const ChriscoursesPerlinNoise = await import("@chriscourses/perlin-noise")

      const showFPS = false
      const MAX_FPS = 60
      const thresholdIncrement = 8
      const thickLineThresholdMultiple = 3
      const res = 5
      const baseZOffset = 0.0002

      const canvas = canvasRef.current!
      const ctx = canvas.getContext("2d")!

      const computedStyle = getComputedStyle(canvas)
      const lineColor = computedStyle.getPropertyValue("--canvas-fg").trim() || "#9DAE98"
      const backgroundColor = computedStyle.getPropertyValue("--canvas-bg").trim() || "rgba(157, 174, 152, 0.8)"

      const frameValues: number[] = []
      const inputValues: number[][] = []

      let currentThreshold = 0
      let cols = 0
      let rows = 0
      let zOffset = 0
      const zBoostValues: number[][] = []
      let noiseMin = 100
      let noiseMax = 0

      setupCanvas()
      animate()

      function setupCanvas() {
        canvasSize()
        window.addEventListener("resize", canvasSize)
      }

      function canvasSize() {
        const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect()
        canvas.width = rect.width * window.devicePixelRatio
        canvas.height = rect.height * window.devicePixelRatio
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        canvas.style.width = rect.width + "px"
        canvas.style.height = rect.height + "px"
        cols = Math.floor(canvas.width / res) + 1
        rows = Math.floor(canvas.height / res) + 1

        // Initialize zBoostValues
        for (let y = 0; y < rows; y++) {
          zBoostValues[y] = []
          for (let x = 0; x <= cols; x++) {
            zBoostValues[y][x] = 0
          }
        }
      }

      function animate() {
        const startTime = performance.now()
        setTimeout(() => {
          requestAnimationFrame(() => animate())
        }, 1000 / MAX_FPS)

        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        zOffset += baseZOffset
        generateNoise()

        const roundedNoiseMin = Math.floor(noiseMin / thresholdIncrement) * thresholdIncrement
        const roundedNoiseMax = Math.ceil(noiseMax / thresholdIncrement) * thresholdIncrement
        for (let threshold = roundedNoiseMin; threshold < roundedNoiseMax; threshold += thresholdIncrement) {
          currentThreshold = threshold
          renderAtThreshold()
        }
        noiseMin = 100
        noiseMax = 0
      }

      function generateNoise() {
        for (let y = 0; y < rows; y++) {
          inputValues[y] = []
          for (let x = 0; x <= cols; x++) {
            inputValues[y][x] = ChriscoursesPerlinNoise.noise(x * 0.02, y * 0.02, zOffset + zBoostValues[y]?.[x]) * 100
            if (inputValues[y][x] < noiseMin) noiseMin = inputValues[y][x]
            if (inputValues[y][x] > noiseMax) noiseMax = inputValues[y][x]
            if (zBoostValues[y]?.[x] > 0) {
              zBoostValues[y][x] *= 0.99
            }
          }
        }
      }

      function renderAtThreshold() {
        ctx.beginPath()
        ctx.strokeStyle = lineColor
        ctx.lineWidth = currentThreshold % (thresholdIncrement * thickLineThresholdMultiple) === 0 ? 1.5 : 0.8

        for (let y = 0; y < inputValues.length - 1; y++) {
          for (let x = 0; x < inputValues[y].length - 1; x++) {
            // Check if every value in the square is above or below the threshold
            if (
              inputValues[y][x] > currentThreshold &&
              inputValues[y][x + 1] > currentThreshold &&
              inputValues[y + 1][x + 1] > currentThreshold &&
              inputValues[y + 1][x] > currentThreshold
            )
              continue
            if (
              inputValues[y][x] < currentThreshold &&
              inputValues[y][x + 1] < currentThreshold &&
              inputValues[y + 1][x + 1] < currentThreshold &&
              inputValues[y + 1][x] < currentThreshold
            )
              continue

            const gridValue = binaryToType(
              inputValues[y][x] > currentThreshold ? 1 : 0,
              inputValues[y][x + 1] > currentThreshold ? 1 : 0,
              inputValues[y + 1][x + 1] > currentThreshold ? 1 : 0,
              inputValues[y + 1][x] > currentThreshold ? 1 : 0,
            )

            placeLines(gridValue, x, y)
          }
        }
        ctx.stroke()
      }

      function placeLines(gridValue: number, x: number, y: number) {
        const nw = inputValues[y][x]
        const ne = inputValues[y][x + 1]
        const se = inputValues[y + 1][x + 1]
        const sw = inputValues[y + 1][x]

        switch (gridValue) {
          case 1:
          case 14:
            const c1 = [x * res + res * linInterpolate(sw, se), y * res + res]
            const d1 = [x * res, y * res + res * linInterpolate(nw, sw)]
            line(d1, c1)
            break
          case 2:
          case 13:
            const b2 = [x * res + res, y * res + res * linInterpolate(ne, se)]
            const c2 = [x * res + res * linInterpolate(sw, se), y * res + res]
            line(b2, c2)
            break
          case 3:
          case 12:
            const b3 = [x * res + res, y * res + res * linInterpolate(ne, se)]
            const d3 = [x * res, y * res + res * linInterpolate(nw, sw)]
            line(d3, b3)
            break
          case 11:
          case 4:
            const a4 = [x * res + res * linInterpolate(nw, ne), y * res]
            const b4 = [x * res + res, y * res + res * linInterpolate(ne, se)]
            line(a4, b4)
            break
          case 5:
            const a5 = [x * res + res * linInterpolate(nw, ne), y * res]
            const b5 = [x * res + res, y * res + res * linInterpolate(ne, se)]
            const c5 = [x * res + res * linInterpolate(sw, se), y * res + res]
            const d5 = [x * res, y * res + res * linInterpolate(nw, sw)]
            line(d5, a5)
            line(c5, b5)
            break
          case 6:
          case 9:
            const a6 = [x * res + res * linInterpolate(nw, ne), y * res]
            const c6 = [x * res + res * linInterpolate(sw, se), y * res + res]
            line(c6, a6)
            break
          case 7:
          case 8:
            const a7 = [x * res + res * linInterpolate(nw, ne), y * res]
            const d7 = [x * res, y * res + res * linInterpolate(nw, sw)]
            line(d7, a7)
            break
          case 10:
            const a10 = [x * res + res * linInterpolate(nw, ne), y * res]
            const b10 = [x * res + res, y * res + res * linInterpolate(ne, se)]
            const c10 = [x * res + res * linInterpolate(sw, se), y * res + res]
            const d10 = [x * res, y * res + res * linInterpolate(nw, sw)]
            line(a10, b10)
            line(c10, d10)
            break
          default:
            break
        }
      }

      function line(from: number[], to: number[]) {
        ctx.moveTo(from[0], from[1])
        ctx.lineTo(to[0], to[1])
      }

      function linInterpolate(x0: number, x1: number, y0 = 0, y1 = 1) {
        if (x0 === x1) {
          return 0
        }
        return y0 + ((y1 - y0) * (currentThreshold - x0)) / (x1 - x0)
      }

      function binaryToType(nw: number, ne: number, se: number, sw: number) {
        const a = [nw, ne, se, sw]
        return a.reduce((res: number, x: number) => (res << 1) | x)
      }
    }

    initCanvas()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: "none",
        "--canvas-bg": canvasBg,
        "--canvas-fg": canvasFg
      } as React.CSSProperties}
    />
  )
}
