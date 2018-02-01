/* 18.1.2-Starting with Mongo JS
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */


// A. Use the command line to create a classroom database. 
use classroomdb
// Insert entries for yourself and the people in your row in a students collection. 
// Each document should have:

// 1. A field of name with the person's name.
// 2. A field of rownumber which will contain the row number that they are in.
// 3. A field of os which will contain the Operating System 
//    of the computer they are using: 'Mac', 'Win', etc
// 4. A field of hobbies with an array of the hobbies the person likes to do.

db.students.insert({"name": "Kurt", "row_number":"1", "operating_system": "Macintosh","hobbies": ["Coding", "Shootin Guns", "Bein a dad"]})
db.students.insert({"name": "Alex", "row_number":"1", "operating_system": "Macintosh","hobbies": ["Development", "Playing Video Games", "Bein a dad"]})
db.students.insert({"name": "Chase", "row_number":"1", "operating_system": "Macintosh","hobbies": ["Paintball", "Skiing", "Gaming"]})
db.students.insert({"name": "Craig", "row_number":"1", "operating_system": "Macintosh","hobbies": ["Gym", "basketball", "music"]})

db.students.insert({"name": "Some Dude", "row_number": 2 , "operating_system": "Macintosh"})
db.students.insert({"name": "Another Dude", "row_number": 2 , "operating_system": "Windows"})



// B. Use find commands to get:
// 1. A list of everyone in your row.

db.students.find({"row_number": "1"}).pretty()



// 2. An entry for a single person.

db.students.find({"name": "Alex"}).pretty()

// 3. The entries for all the Mac users in your row. 

db.students.find({"operating_system": "Macintosh"}).pretty()

// Bonus:
// If you finish early, check out the MongoDB documentation 
// and figure out how to find users by an entry in an array.
