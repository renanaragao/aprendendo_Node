module.exports = function(app){

    var Usuario = app.models.usuarios;
    
    var usuario = {
    
        index: function(req, res){
            
            Usuario.find(function(err, data){
            
                if(err){
                
                    console.log(err);
                
                }
                res.render('usuarios/index', {usuarios: data});
            
            });
        
        },
        cadastro: function(req, res){
        
            /*var model = {nome: 'Renan', login: 'renan', senha: 123};
            
            var usuario = new Usuario(model);
            
            usuario.save(function(erro, data){
            
                if(erro) {
                    res.json(erro);
                    return;
                }
                
                res.json(data);
            
            });*/
            
            res.render('usuarios/cadastro');

        },
        cadastrar: function(req, res){
        
            var model = new Usuario(req.body);
            
            model.save(function(err){
            
                if(err){
                
                    console.log(err);
                }
                
                res.redirect('/usuarios');
            
            });
        
        }
    
    };
    
    return usuario;

};