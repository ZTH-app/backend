db = db.getSiblingDB(`chapter`);

db.createCollection(`chapters`);

db.createUser({
  user: `chapter`,
  pwd: `chapter`,
  roles: [
    {
      role: `readWrite`,
      db: `chapter`,
    },
  ],
});

db.chapters.insertMany([
  {
    name: "MongoDB",
    description:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    content: "Blablabla",
  },
  {
    name: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    content: "Blablabla",
  },
]);
