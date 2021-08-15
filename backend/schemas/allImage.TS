import "dotenv/config"
import {list} from "@keystone-next/keystone/schema"
import {cloudinaryImage} from "@keystone-next/cloudinary"
import { relationship } from "@keystone-next/fields"


//  Defining cloudinary secrets:
export const cloudinary = {
    cloudName:process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret:process.env.CLOUDINARY_SECRET,
    folder:"airbnb"
}

// creating a model named AllImages:

export const AllImage = list({
    fields:{
        images: cloudinaryImage({
            cloudinary,
            label:"Source"
        }),
        hotel : relationship({
            ref:"Hotel.image"
        })
    },
    // @ts-ignore
   
})