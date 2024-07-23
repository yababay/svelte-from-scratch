const EUROPE_MOSCOW_TZ = {timeZone: "Europe/Moscow"}
const RU_RU = "ru-RU"

export const getRussianDate = (date = new Date) => date.toLocaleString(RU_RU, EUROPE_MOSCOW_TZ)

export const getRussianTime = (date = new Date) =>  date.toLocaleString(RU_RU, {hour: '2-digit', minute: '2-digit', ...EUROPE_MOSCOW_TZ})

export const getVerboseRussianDate = (date = new Date) => date.toLocaleString(RU_RU, {
    month:   'short',
    day:     'numeric',
    hour:    '2-digit',
    minute:  '2-digit',
    ...EUROPE_MOSCOW_TZ
})

export const fromRussianDate = (creationDate: string | Date) => {
    if(creationDate instanceof Date) return creationDate
    const arr = /^(\d{2})\D(\d{2})\D(\d{4})\D(.*)/.exec(creationDate)
    if(!Array.isArray(arr)) throw `bad creation date: ${arr}`
    const [ _, day, month, year, time ] = arr
    const isoDate = `${year}-${month}-${day}T${time}+03:00`
    return new Date(isoDate)
}

export const toRussianDate = (date = new Date) => {
    const dateParts = /^(\d{4})\-(\d{2})\-(\d{2}).*/.exec(date.toISOString())
    if(!Array.isArray(dateParts)) throw 'bad date parts'
    const [ _, yyyy, mm, dd ] = dateParts
    return `${dd}-${mm}-${yyyy}`
}

export const getEuropeMoscowISOString = (date = new Date) => {
    const tmp = getRussianDate(date)
    const arr = /^(\d{2})\.(\d{2})\.(\d{4}).*(\d{2}\:\d{2}\:\d{2})$/.exec(tmp)
    if(!Array.isArray(arr)) throw 'bad russian date'
    const [ _, dd, mm, yyyy, t ] = arr
    return `${yyyy}-${mm}-${dd}T${t}+03`
}
