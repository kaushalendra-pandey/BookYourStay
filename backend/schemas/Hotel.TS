import {text,integer, select, relationship} from "@keystone-next/fields"
import {list} from "@keystone-next/keystone/schema"


// creating a hotel schema: 
export const Hotel = list({
    // access:
    fields:{
        name: text({isRequired:true}),
        description: text({
            ui:{
                displayMode:"textarea"
            }
        }),
        rent:integer({isRequired:true}),
        location:select({
            options:[
                {label:"Delhi",value:"delhi"},
                {label:"Mumbai",value:"mumbai"},
                {label:"Mussoori",value:"mussoori"},
                {label:"Ooty",value:"ooty"},
                {label:"Banglore",value:"banglore"},
                {label:"Pune",value:"pune"},
                {label:"Kerela",value:"kerela"},
                {label:"Chandigarh",value:"chandigrah"}
            ] 
        }),

        //TODO: change it to a relation with AllImages schemas: 
        image : relationship({
            ref:"AllImage.hotel"
        })

        // REVIEW AND RATINGS : TODO:
    
    
}
})