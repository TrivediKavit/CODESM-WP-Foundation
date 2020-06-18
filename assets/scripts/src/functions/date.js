function formatDate(date)
{
	if(typeof(date) === 'undefined')
	{
		var d = new Date()
	}
	else
	{
		var d = new Date(date);
	}
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}