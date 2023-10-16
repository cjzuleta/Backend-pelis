const app = require('./app');


app.set('port', process.env.PORT || 4000);


//escuchar puerto
app.listen(app.get('port'), ()=>{
    console.log(`Servidor arranco en puerto: ${app.get('port')}`);
});