// next.config.js
/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

module.exports = withVideos({
  output: 'export', // Enables static HTML export
});