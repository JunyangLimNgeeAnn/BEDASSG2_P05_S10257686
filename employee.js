const employees = [
    { id: 1, name: "James Morrison", contactNumber: 12345678 , role:"Waiter", datejoin:"2012/2/2"},
    { id: 2, name: "Nick James", contactNumber: 87654321 , role:"Assistant Manager",datejoin:"2013/3/4"}
];



class employee{
  constructor(id, name , contactNumber , role , datejoin) {
        this.id = id;
        this.name = name;
        this.contactNumber = contactNumber;
        this.role=role;
        this.datejoin= datejoin;
    };

    static async getallemployees() {
        // Replace this with your actual logic to retrieve all books from the data source (e.g., database)
        return employees; // Assuming 'books' is your in-memory array (for simplicity)
    };
    
    static async getemployeebyid(id) {
        const employees = await this.getallemployees(); // Await the promise to get books
        const employee = employees.find((employee) => employee.id === id);
        return employee;
    };

  static async updateemployee(id, updatedemployeedata) {
    const employees = await this.getallemployees(); // Await the promise to get books
    const existingEmployeeIndex = employees.findIndex((employee) => employee.id === id);
    if (existingEmployeeIndex=== -1) {
      return null; // Indicate book not found
    }

    const updatedemployee= {
      ...employees[existingEmployeeIndex],
      ...updatedemployeedata,
    };

    // Replace this with your actual logic to update the book in the data source (e.g., database)
    employees[existingEmployeeIndex] = updatedemployee;
    return updatedemployee;
  };

  

}


module.exports = employee;