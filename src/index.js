import express from 'express'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// Import the native addon
const mazeFactory = require('../build/Release/addon.node')

const width = 10;
const height = 10;
const algorithm = 'depth-first'; // Example algorithm

const maze = mazeFactory.generateMaze(width, height, algorithm);

console.log('Generated Maze:', maze);





const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/generate-maze', (req, res) => {
  const mazeObjects = getMazeObjects()
  console.log({mazeObjects})
  res.json(mazeObjects)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})