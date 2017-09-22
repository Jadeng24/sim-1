module.exports = {
    createBin: (req, res, next) => {
        let db = req.app.get('db');
        
    },
    deletBin: (req, res, next) => {
        let db = req.app.get('db');
        const { params } = req;

        db.deletBin([parmas.id])
        .then( () => res.status(200).send())
    },
    getAllBins: (req, res, next) => {
        let db = req.app.get('db');

        db.getAllBins().then(bins => res.status(200).send(bins));
    },
    getBin: (req, res, next) => {
        let db = req.app.get('db');
        const { params } = req;

        db.getBin([parmas.id])
        .then( () => res.status(200).send())
    },
    updateBin: (req, res, next) => {
        let db = req.app.get('db');
        const { params, queary}= req;
        
        updateBin.update_product([params.id, query.name, query.price])
        .then( () => res.status(200).send() )
    }
}