module.exports = {
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.status(500).send('Oops! Something went wrong!')
        })
    },
    post: (req, res, next) => {
        const db = req.app.get('db');
        const { name, price, img_url } = req.body;
        db.create_product([name, price, img_url]).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(500).send('Oops! Something went wrong.');
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_product(id).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(500).send('Oops! Something went wrong');
        })
    },
    update: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { new_name } = req.query;
        db.update_product([id, new_name]).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(500).send('Oops! Something went wrong');
        })
    }
}