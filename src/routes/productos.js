const modelProducto = require('../models/productos');
const {Router} = require('express');
const router = Router();




router.post('/productos',(req,res)=>{
    const producto = new modelProducto();
    const data = req.body;
    producto.nombre = data.nombre;
    producto.precio = data.precio;

    producto.save(function(error){
        if(error)
            res.status(500).send("error :"+error);
        res.json({mensaje:"producto registrado"});
    })
})


router.patch("/producto/:id", async (req, res) => {
	try {
		const producto = await modelProducto.findOne({ _id: req.params.id })

		if (req.body.nombre) {
			producto.nombre = req.body.nombre
		}

		if (req.body.precio) {
			producto.precio = req.body.precio
		}

		await producto.save()
		res.json(producto)
	} catch {
		res.status(404)
		res.json({ error: "producto no existe" })
	}
})

router.delete("/producto/:id", async (req, res) => {
	try {
		await modelProducto.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Producto no existe" })
	}
})

router.get('/productos',(req,res)=>{
    modelProducto.find(function(error,data){
        if(error)
            res.status(500).send("error : "+error);
        res.json(data);
    })
})
module.exports = router;

