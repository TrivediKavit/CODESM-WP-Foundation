export function formatDate(format, date)
{
	if(typeof format === 'undefined')
	{
		format = 'mm/dd/yyyy' // FALLBACK TO US FORMAT
	}

	if(typeof(date) === 'undefined')
	{
		var d = new Date()
	}
	else
	{
		var d = new Date(date)
	}

    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

    if (month.length < 2) month = '0' + month
	if (day.length < 2) day = '0' + day
	
	const map = {
        mm: month,
        dd: day,
        yyyy: year,
        yy: year.toString().slice(-2),
    }

    return format.replace(/mm|dd|yyyy|yy/gi, matched => map[matched])
}