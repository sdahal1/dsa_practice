function loop2dArray(arr, ){
	for(let i = 0; i< arr.length; i++){
		if(Array.isArray(arr[i])){
			loop2dArray(arr[i])
		}else{
			console.log(arr[i])
		}
	}
}