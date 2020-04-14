import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    text : {
        type: String,
    },
    key: {
        type: Number,
    }
});


const TodoItem = mongoose.model('TodoItem', schema);
export default TodoItem;