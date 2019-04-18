const datejs = (timestamp = new Date().getTime()) => {
    const date = new Date(timestamp)
    return {
        year: date.getFullYear().toString(),
        month: addZero(date.getMonth() + 1).toString(),
        date: date.getDate().toString(),
        day: date.getDay().toString(),
        day_cn: ['日一二三四五六'][date.getDay()],
        format(format) {
            console.log('333')
            return formatDate(timestamp, format, 's')
        },
        formatWorkDate() {
            console.log('333111')
            return formatWorkDate.bind(null, timestamp)
        }
    }
}
datejs(32132132131)