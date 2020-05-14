const fs = require('fs');
const path = require('path')

const heroesController = {
    index : function(req, res){
 // Busco JSON y lo devuelvo como esta
        let dataJSON = fs.readFileSync(path.join(__dirname, '..', 'data', 'science.json'), 'UTF-8');
    res.send(dataJSON);
    },

    show : function(req, res){
      // Busco JSON y lo convierto en objeto para poder recorrer
        let dataJSON = fs.readFileSync(path.join(__dirname, '..', 'data', 'science.json'), 'UTF-8');
        dataObject = JSON.parse(dataJSON);
        let id = req.params.id;
        dataObject.forEach(function(cientifico) {
            res.send('Hola, mi nombre es :' + cientifico.nombre + ' y soy profesion :' + cientifico.profesion);
        });
    },

    detail : function(req, res){
        let dataJSON = fs.readFileSync(path.join(__dirname, '..', 'data', 'science.json'), 'UTF-8');
        dataObject = JSON.parse(dataJSON);
        let id = req.params.id;
        let ok = req.params.ok;

        let heroe = dataObject.find(function(cientifico){
            return cientifico.id == id
        });
        
        if(heroe){
            if(ok != 'ok'){
                res.send(heroe.nombre + ' Lamento que no quieras saber mas de mi');
            }else {
                res.send(heroe.nombre + '\n' + heroe.resenia);
            }
        }



    }
}


module.exports = heroesController;