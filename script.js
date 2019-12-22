function isDarkmode(){
	return !!getComputedStyle(document.querySelector("html")).getPropertyValue('--isDarkmode');
}
