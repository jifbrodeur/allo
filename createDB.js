function createDB() {
  /*
   * @databaseName Name of the data repository
   * @version Version of the data repository
   */
  const request = window.indexedDB.open("group", 1);

  /*
   * Failed to open the data repository
   */
  request.onerror = function (error) {
    console.log("Failed to open IndexedDB", error);
  };

  /*
   * Data repository opened successfully
   */
  request.onsuccess = function (res) {
    console.log("IndexedDB opened successfully", res);
    db = res.target.result;
  };

  /*
   * Data repository upgrade event (also triggered when creating a new repository for the first time, as going from non-existent to existent is considered an upgrade)
   */
  request.onupgradeneeded = function (res) {
    console.log("IndexedDB upgrade successful", res);
    db = res.target.result;
    db_table = db.createObjectStore("group", { keyPath: "id" });
    db_table.createIndex("indexName", "name", { unique: false });
  };
  return db;
}
function insertData(db) {
  /*
   * Create a new transaction
   * @params Array of data repositories
   * @params Write mode
   */
  const store = db.transaction(["group"], "readwrite").objectStore("group");
  /*
   * Use the add method to add data
   * @params Data information to be added
   */
  const request = store.add({
    id: new Date().getTime(),
    name: nom,
    age: 42,
    email: "XXXX@xxx.com",
  });
  /*
   * Add successful
   */
  request.onsuccess = function (event) {
    console.log("Data added successfully", event);
  };
  /*
   * Add failed
   */
  request.onerror = function (event) {
    console.log("Failed to add data", event);
  };
}
