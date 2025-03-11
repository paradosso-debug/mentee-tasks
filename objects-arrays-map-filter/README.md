### **Basic Traversal**

1. Create an array of 100 objects with `{id, name}` properties. Use `map()` to extract only the names.
2. Given an array of objects with `{id, price}`, use `map()` to double all prices.
3. Convert an array of objects `{name, age}` into an array of strings in the format `"Name: Age"`.
4. Map an array of `{firstName, lastName}` objects into an array of full names.
5. Transform an array of `{title, year}` into an array where the title is in uppercase.
6. Given an array of `{score}`, use `map()` to categorize them into `"Pass"` (>=50) or `"Fail"`.
7. Convert an array of objects `{product, quantity}` into objects that also include `totalPrice = quantity * 10`.
8. Map an array of `{name, birthYear}` into `{name, age}` based on the current year.
9. Convert an array of `{brand, model}` into an array of strings in the format `"Brand - Model"`.
10. Given an array of `{title, author, genre}`, use `map()` to return only the book titles.

---

### **Nested Properties**

11. Map an array of objects `{user: {name, email}}` to extract only emails.
12. Convert an array of `{employee: {id, name}, salary}` into `{id, name, annualSalary}`.
13. Given an array of `{person: {first, last}}`, return full names.
14. Map an array of `{company: {name, employees}}` to return an array of company names.
15. Convert `{author: {firstName, lastName}, books: []}` into `{fullName, bookCount}`.
16. Given `{movie: {title, rating}, year}`, return `{title, rating}` only.
17. Convert `{artist: {name, genre}, albums: []}` into `{name, albumCount}`.
18. Extract `{car: {brand, model, year}}` into `{brand, model}`.
19. Map `{city: {name, country}, population}` into `{city, country, population}`.
20. Convert `{event: {name, location}, date}` into `{eventName, location, date}`.

---

### **Advanced Transformations**

21. Given `{name, skills: []}`, return `{name, skillCount}`.
22. Convert `{user, orders: [{id, total}]}` into `{user, totalSpent}`.
23. Map `{category, products: [{name, price}]}` into `{category, productNames}`.
24. Convert `{team: {name, members: [{id, role}]}}` into `{teamName, memberCount}`.
25. Given `{store: {name, inventory: [{item, stock}]}}`, return `{store, totalStock}`.
26. Map `{university: {name, students: [{name, major}]}}` into `{university, studentCount}`.
27. Convert `{sportsClub: {name, teams: [{name, players}]}}` into `{sportsClub, teamCount}`.
28. Given `{user, posts: [{title, likes}]}`, return `{user, totalLikes}`.
29. Map `{publisher, books: [{title, pages}]}` into `{publisher, totalPages}`.
30. Convert `{library, shelves: [{genre, books}]}` into `{library, bookCount}`.

---

### **Flattening and Merging**

31. Given an array of `{user, friends: [{name}]}`, return `{user, friendNames}`.
32. Convert `{company, employees: [{id, name, department}]}` into `{company, employeeNames}`.
33. Map `{manufacturer, products: [{name, price}]}` into `{manufacturer, productNames}`.
34. Flatten `{store, aisles: [{number, items: [{name, price}]}]}` into `{store, allItems}`.
35. Convert `{country, states: [{name, cities: [{name, population}]}]}` into `{country, cityCount}`.
36. Map `{festival, artists: [{name, genre}]}` into `{festival, artistNames}`.
37. Flatten `{school, classrooms: [{grade, students: [{name, age}]}]}` into `{school, studentNames}`.
38. Convert `{team, matches: [{opponent, score}]} into `{team, totalMatches}`.
39. Given `{movie, cast: [{actor, role}]}`, return `{movie, actors}`.
40. Map `{company, departments: [{name, employees: [{id, name}]}]}` into `{company, totalEmployees}`.

---

### **Filtering and Mapping**

41. Convert `{city, residents: [{name, age}]}` into `{city, adultsOnly}` (age >= 18).
42. Map `{class, students: [{name, grade}]}` to `{class, passingStudents}` (grade > 50).
43. Extract `{game, players: [{name, score}]}` where score > 100.
44. Filter `{team, members: [{name, role}]}` for only `{team, developers}`.
45. Convert `{university, faculty: [{name, subject}]}` into `{university, onlyScienceFaculty}`.
46. Map `{club, members: [{name, age}]}` to `{club, seniorMembers}` (age > 50).
47. Convert `{library, books: [{title, pages}]}` into `{library, longBooks}` (pages > 500).
48. Filter `{company, employees: [{name, yearsWorked}]}` to `{company, experiencedEmployees}` (yearsWorked > 5).
49. Map `{contest, participants: [{name, score}]}` into `{contest, topScorers}` (score > 90).
50. Convert `{store, products: [{name, stock}]}` into `{store, inStockProducts}` (stock > 0).
