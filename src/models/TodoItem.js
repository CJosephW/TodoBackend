import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    text :{
        type:String,
        required: true
        },
    key: Number,
    day : String,
});


const TodoItem = mongoose.model('TodoItem', schema);
export default TodoItem;