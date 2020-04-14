import express, {Router} from 'express';
import TodoItem from './models/TodoItem';

const router = Router();

router.route('/todo')
    .post((req, res) => {
        res.json(req.body)

        var item = new TodoItem();
        
        item.text = req.body.text;
        item.key = req.body.key;
        
        item.save()
        .then(item => {
            res.send("Item saved")
        })
        .catch(err =>{
            res.status(400).send("unable to save")
        })

    })
    .get(async(req, res) => {
        try{
            const items_found = await TodoItem.find()
            res.json(items_found)
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
    });

export default router;
    