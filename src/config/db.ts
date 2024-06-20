import mongoose from 'mongoose'

export default async function connect() {
    // i did the try catch block here also, not just in the controllers ;)
    try {
        // to ignore the issue of undefined environment variable in typescript
        if(process.env.MONGODB_URI) {
            const e = mongoose.connect(process.env.MONGODB_URI)
            // im using these info, error to differentiate from different logging messages ...
            console.info(`cluster destination ^^ : ${(await e).connection.host}`)
        }
    } catch (error) {
        console.error(`error connecting to mongodb, why ? :\n${error.messages}`)
    }
}