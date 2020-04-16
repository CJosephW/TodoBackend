import express, {Router} from 'express';
import TodoItem from './models/TodoItem';

const router = Router();
router.delete('/todo/:key', (req, res) => {
    TodoItem.remove({
        key: req.params.key
    }).then((result) => {
        if(result.deletedCount === 0) {
            res.status(404).send("Couldn't find");
        }
    
        res.json({message: 'Deleted'});
        res.status(200).send();
    }); 
});
router.route('/todo')
    .delete((req, res) =>{

    })
    .post((req, res) => {
        
        console.log(req.body)
        res.json(req.body)

        var item = new TodoItem();
        
        item.text = req.body.text;
        item.key = req.body.key;
        item.day = req.body.day;
        
        item.save()
        .then(send_item => {
            res.send("Item saved");
        })
        .catch(err =>{
            res.status(400).send("unable to save");
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
    