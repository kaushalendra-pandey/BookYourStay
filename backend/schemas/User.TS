import {list} from "@keystone-next/keystone/schema"
import { text,password,relationship } from "@keystone-next/fields"


// creating a user schema:
export const User = list({
    // access:
    // ui:
    fields: {
        name: text({isRequired:true}),
        email: text({isRequired:true,isIndexed:true}),
        password:password({isRequired:true})

    }


})