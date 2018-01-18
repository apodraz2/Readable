

export function getYear(timestamp) {
	const date = new Date(timestamp);
  	
  	return date.getFullYear();
}

export function getDay(timestamp) {
 	const date = new Date(timestamp);
  
  	return date.getDate();
}

export function getMonth(timestamp) {
 	const date = new Date(timestamp);
  
  	return date.getMonth();
}