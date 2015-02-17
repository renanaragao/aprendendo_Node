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
        
            var model;
            
            if(req.body.id){
            
                Usuario
                .findById(req.body.id)
                .exec(function(err, usuario){
                
                    if(err){
                    
                        console.log(err);
                    }
                    
                    usuario.nome = req.body.nome;
                    usuario.login = req.body.login;
                    usuario.senha = req.body.senha;
                    
                    usuario.save(function(err){
                    
                        if(err){
                    
                            console.log(err);
                            res.render('usuarios/cadastro');
                        }
                        
                        res.redirect('/usuarios');
                    
                    });
                    
                });
                
            }else{
                
                model = new Usuario(req.body);
                
                model.save(function(err){
            
                  if(err){
                
                      console.log(err);
                  }
                
                  res.redirect('/usuarios');
            
              });
            }
        },
        editar: function(req, res){
        
            Usuario
            .findById(req.params.id)
            .exec(function(err, data){
            
                if(err){
                
                    console.log(err);
                    res.render('usuarios/cadastro');
                
                }
                
                res.render('usuarios/cadastro', data);
            
            });
        
        },
        visualizar: function(req, res){
        
            Usuario
            .findById(req.params.id)
            .exec(function(err, data){
            
                if(err){
                
                    console.log(err);
                    res.render('usuarios/visualizar');
                
                }
                
                res.render('usuarios/visualizar', data);
            
            });
        }
    
    };
    
    return usuario;

};