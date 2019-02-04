import * as winston from 'winston'

const format = winston.format
const Log = winston.createLogger({
  format: format.combine(
    format.splat(),
    format.timestamp(),
    format.colorize({ all: true }),
    format.json(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      level: process.env.LOGLEVEL || 'debug',
    }),
  ],
})

if (process.env.NODE_ENV === 'production') {
  Log.add(
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  )
}

export { Log }
