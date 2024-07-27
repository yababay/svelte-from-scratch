export const getTimeoutPromise = (fn: CallableFunction, time: number) => {
    return new Promise(yep => {
        setTimeout(() => yep(fn()), time)
    })
}

export const awhile = async () => await getTimeoutPromise(() => {}, 1000)
