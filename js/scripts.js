// scripts.js
var a,
	h;
	
function getTriangleArea(a, h)	{

	if ((a <= 0) || (h<=0)) {
	return 'Nieprawidłowe dane';
	}
	else {
	return a*h/2;
	}
	
}

console.log( getTriangleArea(10,0) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 16);
var triangle3Area = getTriangleArea(10, 12);