export function formatCurrency(priceCents){
 return (priceCents/100).toFixed(2);

}
export default formatCurrency;
if (formatCurrency(2025)==='20.95'){
	console.log("Test passed");

}else{
	console.log("Test failed");
}
if (formatCurrency(0) ==='0.00') {
	console.log("Test passed");
	
}else{
	console.log("Test failed");
}
if (formatCurrency(200.5)==='20.01') {
	console.log("Test passed");
	
} else {
	console.log("Test failed");
	
}