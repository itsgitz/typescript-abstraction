// Example: Logger Type
type Logger = {
  log: (message: string) => void;
  error: (message: string) => void;
  warn: (message: string) => void;
};

function log(message: string) {
  console.log("Log:", message)
}

// Implementation
const consoleLogger: Logger = {
  log: (message) => log(message),
  error: (message) => console.error("Error:", message),
  warn: (message) => console.warn("Warning:", message),
};

// Usage
consoleLogger.log("This is a log message");
consoleLogger.error("This is an error message");
consoleLogger.warn("This is a warning message");

