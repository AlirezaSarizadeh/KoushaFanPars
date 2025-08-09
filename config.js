// config.js
const BACKEND_URL =
  process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000'

module.exports = {
  BACKEND_URL,
}
