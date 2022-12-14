const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, email, id, school){
        super(name, email, id);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
    getIcon(){
        return '<i class="fa">&#xf19d</i>';
    }
}
module.exports = Intern;
