// Task 2: Double all prices in an array of objects
const products = [
  { id: 1, price: 10 },
  { id: 2, price: 20 },
  { id: 3, price: 30 },
];

// Using map() to create a new array where prices are doubled
const doubledPrices = products.map((product) => ({
  id: product.id,
  price: product.price * 2, // Multiply price by 2
}));

console.log(doubledPrices);

// Explanation
// An array of objects called products is created. Each object has:
// id (a unique identifier).
// price (cost of the product).
// .map() loops over each object in the products array.
// It creates a new object where:
// id stays the same.
// price is multiplied by 2.
// The new array is stored in doubledPrices.

// Task 3: Convert array of objects into strings "Name: Age"
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// Using map() to create an array of formatted strings
const formattedPeople = people.map(
  (person) => `Name: ${person.name}, Age: ${person.age}`
);

console.log(formattedPeople);

// Explanation
// Each object has a name and age.
// .map() converts each object into a string.
// Backticks ` ` and ${} insert name and age inside a string.

// Task 10: Extract book titles from an array of book objects
const books = [
  { title: "1984", author: "George Orwell", genre: "Dystopian" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
];

// Using map() to return only the book titles
const bookTitles = books.map((book) => book.title);

console.log(bookTitles);

// Explanation
// Extracts only title from each object.
// Example Output:

// Task 13: Return full names from nested person objects
const peopleData = [
  { person: { first: "John", last: "Doe" } },
  { person: { first: "Jane", last: "Smith" } },
];

// Using map() to extract full names
const fullNames = peopleData.map(
  (data) => `${data.person.first} ${data.person.last}`
);

console.log(fullNames);

// Explanation
// Each object has a person object inside it.
// .map() extracts the first and last names.
// Example Output:

// Task 15: Convert author object into fullName and bookCount
const authorData = {
  author: { firstName: "Mark", lastName: "Twain" },
  books: ["Tom Sawyer", "Huckleberry Finn"],
};

// Creating a new object with fullName and bookCount
const authorInfo = {
  fullName: `${authorData.author.firstName} ${authorData.author.lastName}`,
  bookCount: authorData.books.length, // Count number of books
};

console.log(authorInfo);

// Explanation
// Extracts firstName and lastName from authorData.
// Counts books using .length.

// Task 19: Transform city objects into simpler format "string"
const cityData = [
  { city: { name: "Paris", country: "France" }, population: 2148000 },
  { city: { name: "Tokyo", country: "Japan" }, population: 13960000 },
];

// Using map() to restructure the data
const mappedCities = cityData.map((cityObj) => ({
  city: cityObj.city.name,
  country: cityObj.city.country,
  population: cityObj.population,
}));

console.log(mappedCities);

// Explanation
// .map() extracts city.name, city.country, and population into a simpler structure.

// Task 44: Filter only developers from team members
const teamData = {
  team: "Tech Team",
  members: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Developer" },
  ],
};

// Using filter() to get only developers
const developersOnly = {
  team: teamData.team,
  developers: teamData.members.filter((member) => member.role === "Developer"),
};

console.log(developersOnly);

// Explanation
// .filter() loops through members and keeps only those where role === "Developer".
// The new object stores the team name and the filtered developers.

// Task 48: Filter employees who worked more than 5 years
const companyData = {
  company: "TechCorp",
  employees: [
    { name: "Alice", yearsWorked: 3 },
    { name: "Bob", yearsWorked: 6 },
    { name: "Charlie", yearsWorked: 8 },
  ],
};

// Using filter() to get experienced employees
const experiencedEmployees = {
  company: companyData.company,
  experiencedEmployees: companyData.employees.filter(
    (emp) => emp.yearsWorked > 5
  ),
};

console.log(experiencedEmployees);

// Explanation
// .filter() keeps only employees who worked more than 5 years.
// The new object stores:
// The company name.
// The filtered experiencedEmployees.
