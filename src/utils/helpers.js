export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function empty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false
    }
    return true
}