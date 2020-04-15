import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    text :{
        type:String,
        required: true
        },
    key: Number,

});


const TodoItem = mongoose.model('TodoItem', schema);
export default TodoItem;