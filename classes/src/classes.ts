abstract class Department {
    protected employees: string[] = [];
    static fiscalYear = 2020;
    constructor(protected readonly id: string, protected name: string) {}

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    static createEmployee(name: string) {
        return {name};
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe(): void {
        console.log(`IT Department - ID: ${this.id}`);
    }
}

// Singleton
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    // Making the class a Singleton via a private constructor
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    // Creating a new instance
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    describe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }

    addEmployee(employee: string) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const engineering = new ITDepartment('d1', ['Max']);
engineering.addEmployee('Max');
engineering.addEmployee('Jay');

console.log(engineering);
engineering.describe();
engineering.printEmployeeInformation();

const accounting = AccountingDepartment.getInstance();
accounting.addReport('Something went wrong');
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Sean');
accounting.mostRecentReport = 'Year End Report';
accounting.describe();
console.log(accounting);
console.log(accounting.mostRecentReport);