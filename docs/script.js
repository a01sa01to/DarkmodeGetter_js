window.addEventListener("load", ()=>{
	document.querySelector("button").addEventListener("click", ()=>{
		const e = document.querySelector("p#result");
		if(isDarkmode()){
			e.innerText = "Darkmode is Enabled on this browser,\n but this page is not optimized for darkmode ;P";
		}
		else{
			e.innerText = "Darkmode is Disabled on this browser,\n and this page is optimized for lightmode :-)";
		}
	})

})
