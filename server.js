const express = require('express');
const app = express();

// Port resolution: APP_PORT > PORT > 8080
const port = Number(process.env.APP_PORT || process.env.PORT || 8080);

// Simple readiness state
let ready = false;

// Liveness: process up
app.get('/healthz', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now()
  });
});

// Readiness: app ready to serve
app.get('/ready', (_req, res) => {
  if (ready) {
    res.status(200).json({ status: 'ready' });
  } else {
    res.status(503).json({ status: 'not_ready' });
  }
});

// Root: echo API key if provided
app.get('/', (_req, res) => {
  const apiKey = process.env.API_KEY || process.env.APIKEY || null;
  res.json({ msg: 'Hello', apiKey });
});

// Optional startup delay via STARTUP_DELAY_MS (default 1500ms)
const startupDelay = Number(process.env.STARTUP_DELAY_MS || 1500);

setTimeout(() => {
  ready = true;
  app.listen(port, () => {
    console.log(`Listening on ${port}, ready=${ready}`);
  });
}, startupDelay);
