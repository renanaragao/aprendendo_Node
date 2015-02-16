module.exports = function(app){

    var usuarios = app.controllers.usuarios;
    
    app.get('/usuarios', usuarios.index);
    app.get('/usuarios/cadastro', usuarios.cadastro);
    app.post('/usuarios/cadastro', usuarios.cadastrar);

};