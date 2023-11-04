import db from './mongo'

/** Form response. */
export type Response = {
    /** key of the form. */
    key: string

    email: string
}

export const responses = db.collection<Response>('responses')