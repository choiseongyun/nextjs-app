migrate((db) => {
  const collection = new Collection({
    "id": "pup66zpjgp132zg",
    "created": "2023-06-14 13:43:44.928Z",
    "updated": "2023-06-14 13:43:44.928Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "py7toe8l",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pup66zpjgp132zg");

  return dao.deleteCollection(collection);
})
