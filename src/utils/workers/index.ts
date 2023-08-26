import { Worker } from 'worker_threads';

const test = async () => {
  // This code runs in the main thread

  // Create a new worker thread
  const worker = new Worker(new URL('./foo.worker.ts', import.meta.url));

  // Listen for messages from the worker thread
  worker.on('message', (message) => {
    console.log(`Main thread received: ${message}`);
  });

  // Send a message to the worker thread
  worker.postMessage('Hello to worker thread!');
};

test();
