
import mongoose,{Schema} from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    id:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    watchHistory:{
        type: Schema.Types.ObjectId,
        ref: "Video",
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    Fullname:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        index:true
    },
    avtar:{
        type:String, //cloudinary url
        required: true
    },
    coverImage:{
        type:String
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    refreshToken:{
        type:String
    }
    
},{timestamps:true})


userSchema.pre(
    "save",async function (next) {
        if(!this.isModified("password")) return next();
        
        this.password = bcrypt.hash(this.password, 10)
        next()
    }
)

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id: this.id,
        email: this.email,
        username:this.username,
        Fullname:this.fullname
    }, process.env.ACCESS_TOKEN_SECRET,
{
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
})
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign({
        _id: this._id,
        email: this.email,
        username:this.username,
        fullname:this.fullname
    }, process.env._TOKEN_SECRET,
{
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
})
}



export const User = mongoose.model("User",userSchema)