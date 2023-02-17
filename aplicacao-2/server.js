const express = require('express');
const redis = require('redis');
const app = express();

const redisClient = redis.createClient({
    host: 'test-redis',
    port: 6379
});
app.get('/', function(req, res){
    redisClient.get('numVisits', function(err, numVisits){
        numVisitsToDisplay = parseInt(numVisits)+1;
        if(isNaN(numVisitsToDisplay)){
            numVisitsToDisplay=1;
        }
        res.send('aplicacao-2: numero de visitantes: ' + numVisitsToDisplay);
        numVisits++;
        redisClient.set('numVisits',numVisits);
    });
});

app.listen(5000, function(){
    console.log('aplicacao-2 esta na porta 5000');
});