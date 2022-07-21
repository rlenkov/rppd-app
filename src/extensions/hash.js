export const utf8ToBase64 = str => {
    return Buffer.from(str).toString('base64')
}

export const base64ToUtf8 = str => {
    return Buffer.from(str, 'base64').toString('utf-8')
}

export default utf8ToBase64
