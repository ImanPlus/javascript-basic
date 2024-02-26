// Constants
const text =
  "name, author, yearOfPublish, country,/To Kill a Mockingbird,true,Harper Lee,1960,United States,/1984,false,George Orwell,1949,United Kingdom,/The Great Gatsby,true,F. Scott Fitzgerald,1925,United States,/Moby Dick,false,Herman Melville,1851,United States,/War and Peace,true,Leo Tolstoy,1869,Russia,/The Catcher in the Rye,false,J.D. Salinger,1951,United States,/Pride and Prejudice,true,Jane Austen,1813,United Kingdom,/The Lord of the Rings,false,J.R.R. Tolkien,1954,United Kingdom,/The Diary of Anne Frank,true,Anne Frank,1947,Netherlands,/The Hobbit,false,J.R.R. Tolkien,1937,United Kingdom,/Fahrenheit 451,true,Ray Bradbury,1953,United States,/Jane Eyre,false,Charlotte BrontĆ«,1847,United Kingdom,/The Alchemist,true,Paulo Coelho,1988,Brazil,/Crime and Punishment,false,Fyodor Dostoevsky,1866,Russia,/Wuthering Heights,true,Emily BrontĆ«,1847,United Kingdom,/The Little Prince,false,Antoine de Saint-ExupĆ©ry,1943,France,/Brave New World,true,Aldous Huxley,1932,United Kingdom,/The Adventures of Huckleberry Finn,false,Mark Twain,1884,United States,/Anna Karenina,true,Leo Tolstoy,1877,Russia,/The Scarlet Letter,false,Nathaniel Hawthorne,1850,United States,";

const keys = text.split(",/")[0].split(", "); // Separation of keys from strings
const valuesBooks = text.split("/").slice(1); // Separation of values from strings
const allKeys = ["name", "read", "author", "yearOfPublish", "country"]; // All possible keys for a book object
const books = []; // Empty array for the results of all keys
const finalResult = []; // Empty array for results of specific keys

// Create array with all keys and push it to the 'books' array
for (let i = 0; i < valuesBooks.length; i++) {
  const formatedBookText = valuesBooks[i]
    .substring(0, valuesBooks[i].length - 1)
    .split(","); // Separation of book's information

  const book = {};
  for (let j = 0; j < allKeys.length; j++) {
    book[allKeys[j]] = formatedBookText[j];
  }
  books.push(book);
}

// Display all books with special keys at the beginning of the text
for (let i = 0; i < books.length; i++) {
  const specialKeys = {};
  for (let j = 0; j < keys.length; j++) {
    specialKeys[keys[j]] = books[j][keys[j]];
  }
  finalResult.push(specialKeys);
}

console.log(finalResult);
