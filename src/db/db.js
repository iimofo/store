import Dexie from "dexie";

const db = new Dexie("MyDatabase");
db.version(1).stores({
  products: "++id, quality",
});

export default db;
