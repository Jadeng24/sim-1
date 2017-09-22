module.exports = {
    createBin: (req, res, next) => {
        let db = req.app.get('db');
        
    },
    deleteBin: (req, res, next) => {
        let db = req.app.get('db');
        const { params } = req;

        db.deleteBin([params.id])
        .then( bin => res.status(200).send(bin))
    },
    getAllBins: (req, res, next) => {
        let db = req.app.get('db');
        const { params } = req;

        db.getAllBins([params.id]).then(bins => res.status(200).send(bins));
    },
    getBin: (req, res, next) => {
        let db = req.app.get('db');
        const { params } = req;

        db.getBin([params.id])
        .then( bin => res.status(200).send(bin))
    },
    updateBin: (req, res, next) => {
        let db = req.app.get('db');
        const { params, query}= req;
        
        db.updateBin([params.id, query.name, query.price])
        .then( () => res.status(200).send() )
    }
}