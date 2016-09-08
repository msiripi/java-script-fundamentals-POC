var pargimtech = pargimtech || {};
pargimtech.teamB = pargimtech.teamB || {};

pargimtech.teamB.customer = function (fname,lname,age) {
    this.Fname = fname;
    this.Lname = lname;
    this.Age = age;

    this.getdata = function () {
        return this.Fname + this.Lname + this.Age;
    }

    return this;
}