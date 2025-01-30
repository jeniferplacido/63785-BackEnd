const winston = require('winston');


const customLevelOptions ={
    levels: {
        faltal: 0,
        error: 1,
        warn: 2,
        info: 3,  
        debug: 4
    },
    colors:{
        fatal: 'red',
        error: 'orange',
        warn: 'yellow',
        info: 'blue',
        debug: 'white'
    }
}

const logger = winston.createLogger({

    level: customLevelOptions.levels,
   
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({filename: './errors.log', level: 'warn', format: winston.format.simple()})
    ],
});

// const prodLogger = winston.createLogger({
//     level: 'http',
//     format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.json()
    
//     ),
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({filename: './errors.log', level: 'warn'})
//     ]
// });


const addLogger = (req, res, next) => {
    req.logger = logger;
        next(); 
}

    
module.exports = addLogger;