import "dotenv/config"
import { config, createSchema } from "@keystone-next/keystone/schema"
const databaseURL = process.env.DATABASE_URL || process.env.LOCAL_DB
import {User} from "./schemas/User"
import {Hotel} from "./schemas/Hotel"
import {AllImage} from "./schemas/allImage"
import {createAuth} from "@keystone-next/auth"
import {withItemData,statelessSessions} from "@keystone-next/keystone/session"

const sessionConfig = {
    // No. of days user should be signed it
    maxAge: 60*60*24*360,
    secret: process.env.COOKIE_SECRET
}

const {withAuth} = createAuth({
    listKey : "User",
    identityField:"email",
    secretField:"password",
    // INFO:
    // This option adds support for bootstrapping the first user into the system
    // via the Admin UI. If this option is enabled and there are no users in the
    // system, the Admin UI will present a form to create an initial user in the
    //  system. refer: [https://keystonejs.com/docs/apis/auth]
    initFirstItem:{
        fields: ['name','email','password']
    }
})

export default withAuth(config({
    server: {
        cors:{
            origin: [process.env.FRONTEND_URL],
            credentials:true
        }
    },
    db:{
        adapter: "mongoose",
        url: databaseURL,
        // TODO: Add data seeding here

    },
    lists: createSchema({
        // TODO: Schemas go here:
        User,
        Hotel,
        AllImage
    }),
    ui:{
        // show the ui only for user who passes this
        isAccessAllowed : ({session}) => {
            return !!session?.data;
        }
    },
    
    session : withItemData(statelessSessions(sessionConfig),{

        // INFO: This is the GraphQL schema here!
        User: `id,name,email`
    })
}))