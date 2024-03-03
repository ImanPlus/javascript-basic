const books = [
  {
    name: "Advanced discrete service-desk",
    author: "Agatha Christie",
    yearOfPublication: 1973,
    tags: ["history", "horror", "romance", "adventure"],
  },
  {
    name: "Visionary actuating product",
    author: "Leo Tolstoy",
    yearOfPublication: 2011,
    tags: ["biography", "fantasy", "mystery", "horror"],
  },
  {
    name: "Advanced foreground monitoring",
    author: "J.K. Rowling",
    yearOfPublication: 1984,
    tags: ["classic"],
  },
  {
    name: "Innovative responsive paradigm",
    author: "Stephen King",
    yearOfPublication: 1917,
    tags: ["adventure", "mystery", "horror", "non-fiction"],
  },
  {
    name: "Stand-alone interactive customer loyalty",
    author: "Leo Tolstoy",
    yearOfPublication: 1924,
    tags: ["romance", "horror", "science fiction", "history"],
  },
  {
    name: "Automated systemic matrix",
    author: "Charles Dickens",
    yearOfPublication: 1995,
    tags: ["classic", "history"],
  },
  {
    name: "Proactive dynamic model",
    author: "Virginia Woolf",
    yearOfPublication: 1922,
    tags: ["biography", "classic"],
  },
  {
    name: "Virtual heuristic conglomeration",
    author: "Mark Twain",
    yearOfPublication: 2001,
    tags: ["adventure", "history", "non-fiction"],
  },
  {
    name: "Front-line bifurcated ability",
    author: "J.R.R. Tolkien",
    yearOfPublication: 1950,
    tags: ["fantasy", "adventure"],
  },
  {
    name: "Inverse coherent framework",
    author: "George R.R. Martin",
    yearOfPublication: 1998,
    tags: ["fantasy", "adventure", "mystery"],
  },
  {
    name: "Grass-roots cohesive policy",
    author: "Agatha Christie",
    yearOfPublication: 1978,
    tags: ["mystery", "crime"],
  },
  {
    name: "Persistent explicit challenge",
    author: "Fyodor Dostoevsky",
    yearOfPublication: 1880,
    tags: ["classic", "philosophy"],
  },
  {
    name: "Cross-platform modular time-frame",
    author: "Stephen King",
    yearOfPublication: 1987,
    tags: ["horror", "thriller"],
  },
  {
    name: "Re-contextualized multi-tasking interface",
    author: "J.K. Rowling",
    yearOfPublication: 2005,
    tags: ["fantasy", "young adult"],
  },
  {
    name: "Organic bottom-line service-desk",
    author: "Leo Tolstoy",
    yearOfPublication: 1912,
    tags: ["history", "classic"],
  },
  {
    name: "Multi-lateral intermediate moratorium",
    author: "Charles Dickens",
    yearOfPublication: 1859,
    tags: ["classic", "history", "social"],
  },
  {
    name: "Secured line-driven workforce",
    author: "Virginia Woolf",
    yearOfPublication: 1941,
    tags: ["modernism", "classic"],
  },
  {
    name: "Cloned clear-thinking complexity",
    author: "Mark Twain",
    yearOfPublication: 1884,
    tags: ["adventure", "history", "satire"],
  },
  {
    name: "Up-sized attitude-oriented capability",
    author: "J.R.R. Tolkien",
    yearOfPublication: 1937,
    tags: ["fantasy", "epic"],
  },
  {
    name: "Function-based didactic task-force",
    author: "George R.R. Martin",
    yearOfPublication: 2011,
    tags: ["fantasy", "epic", "adventure"],
  },
];

const tagCount = books.reduce((acc, book) => {
  book.tags.forEach((tag) => {
    if (acc[tag]) {
      acc[tag]++;
    } else {
      acc[tag] = 1;
    }
  });

  // for (let i = 0; i < book.tags.length; i++) {
  //   const tag = book.tags[i];
  //   if (acc[tag]) {
  //     acc[tag] += 1;
  //   } else {
  //     acc[tag] = 1;
  //   }
  // }
  return acc;
}, {});

const nonZeroTags = Object.entries(tagCount).filter(
  ([tag, count]) => count > 1
);

const sortedNonZeroTags = nonZeroTags.sort((a, b) => b[1] - a[1]);

console.log(sortedNonZeroTags);
