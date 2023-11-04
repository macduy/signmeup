import db from './mongo'

export type SignUpForm = {
    /** key to access the form for public. */
    key: string
    /** Key to access the form for admins. */
    adminKey: string
}

export const forms = db.collection<SignUpForm>('forms')