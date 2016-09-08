var pargimtech = pargimtech || {};
pargimtech.teamA = pargimtech.teamA || {};


pargimtech.teamA.customer = function (fname, lname) {
    this.Fname = fname;
    this.Lname = lname;
    this.getfun = function () {
        return this.Fname + this.Lname;
    }
    return this;
}

 console.log(pargimtech.teamA.customer('arjun', 'karthik').getfun());

