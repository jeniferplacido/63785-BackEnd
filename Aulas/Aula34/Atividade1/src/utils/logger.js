const winston = require('winston');

const devLogger = winston.createLogger({

    level: 'verbose',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console()
    ],
});

const prodLogger = winston.createLogger({
    level: 'http',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: './errors.log', level: 'warn'})
    ]
});


const addLogger = (req, res, next) => {
    if( process.env.NODE_ENV === 'prod') {
        req.logger = prodLogger;
    } else {
        req.logger = devLogger;
    }
    req.logger.http(`Request: ${req.method} na ${req.url} - ${new Date().toLocaleTimeString()}`);
}

    
module.exports = addLogger;