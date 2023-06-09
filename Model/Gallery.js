const {Schema,model}=require('mongoose');
let GallerySchema = new Schema(
    {
    photo:{
        type:[""],
        require:true,
    },
    photo_name:{
        type: String,
        required:true,
    },
    photo_description:{
        type:String,
        required:true,
    },
    user:{
        type: String,
        required:true,
    }
},
{timestamps:true}
);

module.exports =model ("gallery",GallerySchema);