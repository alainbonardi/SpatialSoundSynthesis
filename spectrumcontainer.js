//Spectrum container
//implements partial and spectrum classes

//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------//
//Partial class
//Constructor of the partial class
//----------------------------------------------------------------------------------------//
function partial(f, a) {
	this.freq = f;
	this.amp = a;
	this.duplicated = 0;
}
//----------------------------------------------------------------------------------------//
//This method resets the duplicated flag of the class
//----------------------------------------------------------------------------------------//
partial.prototype.resetDuplicated = function() {
	this.duplicated = 0;
}
//----------------------------------------------------------------------------------------//
//This method shifts the frequency of the class from f0 (in Hz)
//----------------------------------------------------------------------------------------//
partial.prototype.freqshift = function(f0) {
	this.freq = this.freq + f0;
}
//----------------------------------------------------------------------------------------//
//This method multiplies the frequency of the class by a factor
//----------------------------------------------------------------------------------------//
partial.prototype.freqmult = function(factor) {
	this.freq = this.freq * factor;
}
//----------------------------------------------------------------------------------------//
//This method prints in the console the content of the class
//----------------------------------------------------------------------------------------//
partial.prototype.print = function() {
	post("frequency=", this.freq, " amplitude=", this.amp, " duplicated=", this.duplicated, "\n");
}
//----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------//
//Spectrum class
//Constructor of the partial class
function spectrum(N) {
	var i;
	this.partialNumber = N;
	this.partialList = new Array(N);
	for (i = 0; i < N; i++) {
		this.partialList[i] = new partial(i*100, 0);
	}
}