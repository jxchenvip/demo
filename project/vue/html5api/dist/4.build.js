webpackJsonp([4],{17:function(t,e,a){var r,s;r=a(51);var n=a(61);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=r},51:function(t,e,a){"use strict";e.default={name:"indexeddb",data:function(){return{}}}},61:function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"api"},[t._h("h2",["IndexedDB API"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["IndexedDB API"])," ",t._h("p",["IndexedDB is an API for client-side storage of significant amounts of structured data and for high performance searches on this data using indexes. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution."])])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Environment (IDBEnvironment and IDBFactory)"])," ",t._h("p",["The IDBEvironment interface of the IndexedDB API provides asynchronous access to a client-side database. It is implemented by window and worker objects."])," ",t._h("p",["The IDBFactory interface of the IndexedDB API lets applications asynchronously access the indexed databases. The object that implements the interface is window.indexedDB. You open—that is, create and access—and delete a database with the object and not directly with IDBFactory."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["open(name)"])," ",t._h("td",["This method opens a database with the name specified in its attributes. If no previous database exists, a new one is created using the name provided."])])," ",t._h("tr",[t._h("td",["deleteDatabase(name)"])," ",t._h("td",["This method deletes the database with the name specified in its attributes."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tindexedDB.open(dbname); \n\tindexedDB.deleteDatabase(dbname);\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Attributes"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["indexedDB"])," ",t._h("td",["This attribute provides a mechanism for accessing the indexed database system."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\twindow.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;\n\t"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Database (IDBDatabase)"])," ",t._h("p",["The IDBDatabase interface of the IndexedDB API provides asynchronous access to a connection to a database. Use it to create, manipulate, and delete objects in that database."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["setVersion(value)"])," ",t._h("td",["This method sets a new version for the opened database. The value attribute can be any string we want."])])," ",t._h("tr",[t._h("td",["createObjectStore(name, keyPath, autoIncrement)"])," ",t._h("td",["This method creates a new Object Store for the opened database. The name attribute represents the name of the Object Store, keyPath is a common index for the objects stored in this Object Store and autoIncrement is a boolean value to activate a key generator."])])," ",t._h("tr",[t._h("td",["deleteObjectStore(name)"])," ",t._h("td",["This method deletes an Object Store with the name specified in its attribute."])])," ",t._h("tr",[t._h("td",["transaction(stores, type, timeout)"])," ",t._h("td",["This method initiates a transaction. The transaction can be specific for one or more Object Stores declared in the stores attribute, and it can be created for different access modes according to the type attribute. It can also receive a timeout attribute in milliseconds to specify the time the operation is allowed to take."])])])," ",t._h("pre",{staticClass:"api-code"},['\n\t//db - is IDBDatabase object \n\tdb.setVersion(db_version); \n\n\tdb.createObjectStore(object_name, {keyPath: "timeStamp"}); \n\n\tvar trans = db.transaction([object_name], "readwrite");\n\t'])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["version"])," ",t._h("td",["This property returns the value of the current version of the open database."])])," ",t._h("tr",[t._h("td",["name"])," ",t._h("td",["This property returns the name of the open database."])])," ",t._h("tr",[t._h("td",["objectStoreNames"])," ",t._h("td",["This property returns a list of the names of the Object Stores in the opened database."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\t//db - is IDBDatabase object \n\tvar version=db.version;\n\tvar name=db.name;\n\tvar list=db.objectStoreNames;\n\t"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Object Store (IDBObjectStore)"])," ",t._h("p",["The IDBObjectStore interface of the IndexedDB API represents an object store in a database. Records within an object store are sorted according to their keys. This sorting enables fast insertion, look-up, and ordered retrieval."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["add(object)"])," ",t._h("td",["This method adds an object to the selected Object Store with the information provided in its attributes. If an object with the same index already exists, an error is returned. The method can receive a keyword/value pair or an object containing several keyword/value pairs as attribute."])])," ",t._h("tr",[t._h("td",["put(object)"])," ",t._h("td",["This method adds an object to the selected Object Store with the information provided in its attributes. If an object with the same index already exists, the object is overwritten with the new information. The method can receive a keyword/value pair or an object containing several keyword/value pairs as attribute."])])," ",t._h("tr",[t._h("td",["get(key)"])," ",t._h("td",["This method returns the object with the index corresponding to key."])])," ",t._h("tr",[t._h("td",["delete(key)"])," ",t._h("td",["This method deletes the object with the index corresponding to key."])])," ",t._h("tr",[t._h("td",["createIndex(name, property, unique)"])," ",t._h("td",["This method creates a new index for the selected Object Store. The name attribute specifies the name of the index, the property attribute declares the property of the objects that will be associated with this index and the unique attribute indicates whether objects with the same index value are allowed or not."])])," ",t._h("tr",[t._h("td",["index(name)"])," ",t._h("td",["This method opens the index with the name specified in its attribute."])])," ",t._h("tr",[t._h("td",["deleteIndex(name)"])," ",t._h("td",["This method deletes an index with the name specified in its attribute."])])," ",t._h("tr",[t._h("td",["openCursor(range, direction)"])," ",t._h("td",["This method creates a cursor over the object of the selected Object Store. The range attribute takes a range object to determine which objects are selected. The direction attribute set the order of these objects."])])])," ",t._h("pre",{staticClass:"api-code"},['\n\tvar trans = db.transaction([object_name], "readwrite");\n\tvar store = trans.objectStore(object_name);\n\tvar timeStamp=new Date().getTime();\n\tvar data = {"record": 10,"timeStamp": timeStamp};\n\tvar request = store.put(data);\n\t// or var request = store.add(data); \n\n\tvar request = store.get(1); // request.record is equal 10 \n\tvar request = store.delete(1); \n\n\tvar trans = db.transaction([object_name], "readwrite");\n\tvar store = trans.objectStore(object_name);\n\tvar cursorRequest = store.openCursor();\n\t'])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["name"])," ",t._h("td",["This property provides the name of the Object Store currently in use."])])," ",t._h("tr",[t._h("td",["keyPath"])," ",t._h("td",["This property returns the keyPath, if any, for the Object Store currently in use."])])," ",t._h("tr",[t._h("td",["IndexNames"])," ",t._h("td",["This property returns a list of the names of the indexes created for the Object Store currently in use."])])])," ",t._h("pre",{staticClass:"api-code"},['\n\tvar data = {"record": {"foo": "bar"},"timeStamp": timeStamp}; // keyPath - "timeStamp" \n\n\tvar trans = db.transaction([object_name], "readwrite");\n\tvar store = trans.objectStore(object_name);\n\tvar indexnames=store.IndexNames;\n\t'])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Cursors(IDBCursor)"])," ",t._h("p",["The IDBCursor interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Constants"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["NEXT"])," ",t._h("td",["This constant determines an ascending order for the objects pointed to by the cursor (This is the value by default.)."])])," ",t._h("tr",[t._h("td",["NEXT_NO_DUPLICATE"])," ",t._h("td",["This constant determines an ascending order for the objects pointed to by the cursor and ignores the duplicates."])])," ",t._h("tr",[t._h("td",["PREV"])," ",t._h("td",["This constant determines a descending order for the objects pointed to by the cursor."])])," ",t._h("tr",[t._h("td",["PREV_NO_DUPLICATE"])," ",t._h("td",["This constant determines a descending order for the objects pointed to by the cursor and ignores the duplicates."])])])," ",t._h("pre",{staticClass:"api-code"},['\n\tvar trans = db.transaction([object_name], "readwrite");\n\tvar store = trans.objectStore(object_name);\n\tvar cursorRequest = store.openCursor(range, IDBCursorSync.NEXT_NO_DUPLICATE);\n\tvar cursorRequest = store.openCursor("prev");\n\t'])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["continue(key)"])," ",t._h("td",["This method moves the pointer of the cursor to the next object on the list or to the object referenced by the key attribute, if it’s present."])])," ",t._h("tr",[t._h("td",["delete()"])," ",t._h("td",["This method deletes the object currently pointed to by the cursor."])])," ",t._h("tr",[t._h("td",["update(value)"])," ",t._h("td",["This method updates the object currently pointed to by the cursor with the value provided in its attribute."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tcursorRequest.onsuccess=function(e){ \n\t   var cursor=cursorRequest.result || e.result;\n\t    ...\n\t   cursor.continue(); \n\t}\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["key"])," ",t._h("td",["This property returns the value of the index for the object currently pointed to by the cursor."])])," ",t._h("tr",[t._h("td",["value"])," ",t._h("td",["This property returns the value of any property of the object currently pointed to by the cursor."])])," ",t._h("tr",[t._h("td",["direction"])," ",t._h("td",["This property returns the order for the objects read by the cursor (ascending or descending)."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tcursorRequest.onsuccess=function(e){ \n\t   var cursor=cursorRequest.result || e.result;\n\t    var datavalue=cursor.value; // object\n\t    var datakey=cursor.key;\n\t    var datadirection=cursor.direction;\n\t   cursor.continue(); \n\t}\n\t"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Transactions (IDBTransaction)"])," ",t._h("p",["The IDBTransaction interface of the IndexedDB API provides a static, asynchronous transaction on a database using event handler attributes. All reading and writing of data are done within transactions. You actually use IDBDatabase to start transactions and use IDBTransaction to set the mode of the transaction and access an object store and make your request. You can also use it to abort transactions."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Constants (Types)"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["readonly"])," ",t._h("td",["This constant configures the transaction as a read_only transaction (This is the value by default.)."])])," ",t._h("tr",[t._h("td",["readwrite"])," ",t._h("td",["This constant configures the transaction as a read_write transaction."])])," ",t._h("tr",[t._h("td",["versionchange"])," ",t._h("td",["This type of transaction is used solely for updating the version number."])])])," ",t._h("pre",{staticClass:"api-code"},['\n\tvar trans = db.transaction([object_name], "readwrite");\n\t'])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Range (IDBKeyRange)"])," ",t._h("p",["The IDBKeyRange interface of the IndexedDB API represents a continuous interval over some data type that is used for keys. Records can be retrieved from object stores and indexes using keys or a range of keys. You can limit the range using lower and upper bounds. For example, you can iterate over all values of a key between x and y."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["only(value)"])," ",t._h("td",["This method returns a range with both the ending and starting point set to value."])])," ",t._h("tr",[t._h("td",["bound(lower, upper, lowerOpen, upperOpen)"])," ",t._h("td",["This method returns a range with the starting point set by lower, the ending point set by upper and whether this values will be excluded from the list of objects or not."])])," ",t._h("tr",[t._h("td",["lowerBound(value, open)"])," ",t._h("td",["This method returns a range starting from value and ending at the end of the object list. The open attribute determines whether the objects that match value will be excluded or not."])])," ",t._h("tr",[t._h("td",["upperBound(value, open)"])," ",t._h("td",["This method returns a range starting from the beginning of the object list and ending at value. The open attribute determines whether the objects that match value will be excluded or not."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tstore.delete(IDBKeyRange.lowerBound(0));\n\tstore.delete(IDBKeyRange.upperBound(0));\n\t"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Error (IDBDatabaseException)"])," ",t._h("p",["In the IndexedDB API, an IDBDatabaseException object represents exception conditions that can be encountered while performing database operations."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["code"])," ",t._h("td",["This property represents the number of the error."])])," ",t._h("tr",[t._h("td",["message"])," ",t._h("td",["This property returns a message describing the error."])])])," ",t._h("pre",{staticClass:"api-code"},['\n\tvar trans = $$.db.transaction([object_name], "readwrite");\n\tvar store = trans.objectStore(object_name);\n\tvar cursorRequest = store.openCursor();\n\tcursorRequest.onerror=function(e){\n\t   console.log(e);\n\t} \n\t'])," ",t._h("h4",{staticClass:"api-table-caption"},["The Error values"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["0"])," ",t._h("td",["UNKNOWN_ERR"])])," ",t._h("tr",[t._h("td",["1"])," ",t._h("td",["NON_TRANSIENT_ERR"])])," ",t._h("tr",[t._h("td",["2"])," ",t._h("td",["NOT_FOUND_ERR"])])," ",t._h("tr",[t._h("td",["3"])," ",t._h("td",["CONSTRAINT_ERR"])])," ",t._h("tr",[t._h("td",["4"])," ",t._h("td",["DATA_ERR"])])," ",t._h("tr",[t._h("td",["5"])," ",t._h("td",["NOT_ALLOWED_ERR"])])," ",t._h("tr",[t._h("td",["6"])," ",t._h("td",["TRANSACTION_INACTIVE_ERR"])])," ",t._h("tr",[t._h("td",["7"])," ",t._h("td",["ABORT_ERR"])])," ",t._h("tr",[t._h("td",["11"])," ",t._h("td",["READ_ONLY_ERR"])])," ",t._h("tr",[t._h("td",["21"])," ",t._h("td",["RECOVERABLE_ERR"])])," ",t._h("tr",[t._h("td",["31"])," ",t._h("td",["TRANSIENT_ERR"])])," ",t._h("tr",[t._h("td",["32"])," ",t._h("td",["TIMEOUT_ERR"])])," ",t._h("tr",[t._h("td",["33"])," ",t._h("td",["DEADLOCK_ERR"])])])])}]}}});
//# sourceMappingURL=4.build.js.map