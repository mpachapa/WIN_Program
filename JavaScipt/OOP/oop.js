function Job(name, industry, reqDegree, field) {
    this.name = name;
    this.industry = industry;
    this.reqDegree = reqDegree;
    this.field = field;

    this.getFieldAndIndustry = function() {
        return this.field + " " + this.industry;
    }
}

Job.prototype.getName = function() {
    return this.name;
}

class JobClass {
    constructor(name, industry, reqDegree, field, salary, description) {
        this.name = name;
        this.industry = industry;
        this.reqDegree = reqDegree;
        this.field = field;
        this.salary = salary;
        this.description = description;
    }
    getName() {
        return this.name;
    }
    getFieldAndIndustry() {
        return this.field + " " + this.industry;
    }
    getSalary() {
        return this.salary;
    }
    getDescription() {
        return this.description;
    }
}

class Professor extends JobClass {
    constructor() {
        super()

    }
}

let bartender = new Job("Bartender", "Service", false, "Food and Bev");
let foodRunner = new Job("Food Runner", "Service", false, "Food and Bev");
let chef = new Job("Chef", "Service", false, "Food and Bev");

let beerTender = new JobClass("Bartender", "Service", false, "Food and Bev", 30, "They pour beer and give it to customers");
let teacher = new JobClass("Teacher", "Service", true, "Education", 45000, "The teach general education to K through 12 students");
//let profesor = Professor("Professor", "Service", true, "Education", 60000, "Teaching college level course to further educate young minds.")

console.log(teacher.getFieldAndIndustry());
console.log(bartender.getName());