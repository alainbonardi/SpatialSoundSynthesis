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
	this.startDate = 0; //in milliseconds//
}

//----------------------------------------------------------------------------------------//
//This method gets the frequency of the partial
//----------------------------------------------------------------------------------------//
partial.prototype.getFreq = function() {
	return this.freq;
}

//----------------------------------------------------------------------------------------//
//This method gets the amplitude of the partial
//----------------------------------------------------------------------------------------//
partial.prototype.getAmp = function() {
	return this.amp;
}

//----------------------------------------------------------------------------------------//
//This method gets the startdate of the partial
//----------------------------------------------------------------------------------------//
partial.prototype.getStartDate = function() {
	return this.startDate;
}

//----------------------------------------------------------------------------------------//
//This method sets the frequency of the partial
//----------------------------------------------------------------------------------------//
partial.prototype.setFreq = function(f) {
	this.freq = f;
}

//----------------------------------------------------------------------------------------//
//This method sets the amplitude of the partial
//----------------------------------------------------------------------------------------//
partial.prototype.setAmp = function(a) {
	this.amp = a;
}

//----------------------------------------------------------------------------------------//
//This method sets the startdate of the partial
//----------------------------------------------------------------------------------------//
partial.prototype.setStartDate = function(d) {
	this.startDate = d;
}

//----------------------------------------------------------------------------------------//
//This method draws randomly the startdate of the partial
//----------------------------------------------------------------------------------------//
partial.prototype.drawStartDate = function(dateMax) {
	this.startDate = Math.floor(Math.random() * dateMax);
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
//This method prints in the console the content of the partial class
//----------------------------------------------------------------------------------------//
partial.prototype.print = function() {
	post("frequency=", this.freq, " amplitude=", this.amp, " startDate=", this.startDate, "\n");
}

//----------------------------------------------------------------------------------------//
//To test partial class
//----------------------------------------------------------------------------------------//
function partial_test() {
	var f, a, d;
	p1 = new partial(440, 0.3);
	post("p1_____", "\n");
	f = p1.getFreq();
	post("getFreq sur p1=", f, "\n");
	a = p1.getAmp();
	post("getAmp sur p1=", a, "\n");
	d = p1.getStartDate();
	post("getStartDate sur p1=", d, "\n");
	p1.print();
	post("modification freq, amp, startDate\n");
	p1.setFreq(450);
	p1.setAmp(0.4);
	p1.setStartDate(100);
	p1.print();
	post("draws randomnly the startDate\n");
	p1.drawStartDate(5000);
	p1.print();
	post("_____après freqshift de 100\n");
	p1.freqshift(100);
	p1.print();
	post("_____après freqmult de 3\n");
	p1.freqmult(3);
	p1.print();
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
		this.partialList[i] = new partial(i*50, 0);
	}
}

//----------------------------------------------------------------------------------------//
//This method removes the partial at # index from the spectrum
//----------------------------------------------------------------------------------------//
spectrum.prototype.removePartial = function(index) {
	var n;
	n = this.partialNumber;
	if ((index !== -1) && (n > 1)) {
		this.partialList.splice(index, 1);
		this.partialNumber = n - 1;
	}
}

//----------------------------------------------------------------------------------------//
//This method draws randomly the startdates of the partials of the spectrum
//----------------------------------------------------------------------------------------//
spectrum.prototype.drawStartDates = function(dateMax) {
	var i, n;
	n = this.partialNumber;
	for (i = 0; i < n; i++) {
		this.partialList[i].drawStartDate(dateMax);
	}
}

//----------------------------------------------------------------------------------------//
//This method prints in the console the content of the spectrum class
//----------------------------------------------------------------------------------------//
spectrum.prototype.print = function() {
	var i, n;
	n = this.partialNumber;
	post("______Number of partials =", n, "\n");
	for (i = 0; i < n; i++) {
		this.partialList[i].print();
	}
}

function spectrum_test() {
	s1 = new spectrum(50);
	s1.print();
	post("Draws startDates\n");
	s1.drawStartDates(2000);
	s1.print();
	post("Removes partial#25\n");
	s1.removePartial(25);
	s1.print();
}

