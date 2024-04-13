import mongoose,{Schema} from 'mongoose'
import mongooseAggregeate from 'mongoose-aggregate-paginate-v2'


const videoSchema = new Schema({
    id:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    videoFile:{
        type:String, //cloudinart url
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default: 0
    },
    isPublished:{
        type:Boolean,
        default:true
    }

},{timestamps:true})


videoSchema.plugin(mongooseAggregeate)




export const Video = mongoose.model("Video", videoSchema)