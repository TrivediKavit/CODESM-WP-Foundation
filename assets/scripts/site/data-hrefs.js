export function addEvent(ele, event, func)
{
	if(ele.addEventListener) ele.addEventListener(event, func, false);
	else ele.attachEvent('on' + event, func);
}

export function link(event)
{
	var target	= event.target;
	var url	= this.getAttribute('data-href');
	var newWindow = (this.getAttribute('data-newwindow') !== null) ? true : false;

	if (!target.href)
	{
		var meta = (newWindow) ? '_blank' : '_self';
		window.open(url, meta);
	}
}

export function setHrefs()
{
	if (document.querySelectorAll)
	{
		var datahrefs	= document.querySelectorAll('[data-href]'),
				dhcount	= datahrefs.length;
		
		while (dhcount-- > 0)
		{
			var ele = datahrefs[dhcount];
			addEvent(ele, 'click', link);
		}
	}
}