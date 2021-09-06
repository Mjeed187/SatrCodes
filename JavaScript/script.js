class Vehicles {
    constructor(name, company, ID) {
        this.name = name;
        this.company = company;
        this.ID = ID;
    }
}

class Car extends Vehicles {
    gasOrElecrtric() {
        return 'gas'
        return 'electric'
    }
}

class Airplane extends Vehicles {
    type() {
        return 'type'
    }
}

class Employee {
    constructor(name, dateOfBirth, ID) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.ID = ID;
    }
}

class Driver extends Employee {
    licenseID() {
        return '53532'
    }
}

class Pilot extends Employee {
    licenseID() {
        return '123434'
    }
}

class Reservation {
    constructor(reservationID, vehiclesId, reservationDate, employeeId ) {
        this.reservationID = reservationID;
        this.vehiclesId = vehiclesId;
        this.employeeId = employeeId;
        this.reservationDate = reservationDate;
    }
}


const car1 = new Car('Charger', 'Dodge', 5187)
const car2 = new Car('Corvet', 'Chevrolet', 5487)
const car3 = new Car('GS 350F', 'Lexus', 7712)
console.log(car1);
console.log(car2);
console.log(car3);
