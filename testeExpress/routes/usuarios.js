module.exports = function(app){

    var usuarios = app.controllers.usuarios;
    
    app.get('/usuarios', usuarios.index);
    app.get('/usuarios/cadastro', usuarios.cadastro);
    app.post('/usuarios/cadastro', usuarios.cadastrar);
    app.get('/usuarios/cadastro/:id', usuarios.editar);
    app.get('/usuarios/visualizar/:id', usuarios.visualizar);

};