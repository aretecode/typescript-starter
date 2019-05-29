declare namespace NodeJS {
  interface Global {
    process: Process
  }
  interface ProcessEnv {
    NODE_ENV: 'test' | 'development' | 'production'
  }

  interface Process {
    browser: boolean
    env: ProcessEnv
  }
}
