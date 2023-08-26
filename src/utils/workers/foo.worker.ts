import { parentPort } from 'worker_threads';

// Listen for messages from the main thread
parentPort?.on('message', (message: string) => {
  console.log(`Worker thread received: ${message}`);

  // Send a message back to the main thread
  parentPort?.postMessage('Message received in worker thread!');
});
