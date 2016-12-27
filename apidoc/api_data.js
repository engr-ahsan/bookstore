define({ "api": [
  {
    "type": "delete",
    "url": "/api/genres/:_id",
    "title": "Delete A Book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Book ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n\"n\": 1,\n\"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Books",
    "name": "DeleteApiGenres_id"
  },
  {
    "type": "get",
    "url": "/api/books",
    "title": "Get All Books",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.id",
            "description": "<p>Book ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.title",
            "description": "<p>Book Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.genre",
            "description": "<p>Book Genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.description",
            "description": "<p>Book's Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.author",
            "description": "<p>Book Author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.publisher",
            "description": "<p>Book Publisher</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.pages",
            "description": "<p>Book Pages</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.image_url",
            "description": "<p>Book Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.buy_url",
            "description": "<p>Book Buy URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "genres.createDate",
            "description": "<p>Genre Date Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": " {\n[\n{\n  \"_id\": \"5860d4504857ab9c4a6f078a\",\n  \"title\": \"The Murder House\",\n  \"genre\": \"Suspense\",\n  \"description\": \"Dummy description of book\",\n  \"author\": \"James Patterson\",\n  \"publisher\": \"Brown and Company\",\n  \"pages\": \"480\",\n  \"image_url\": \"http://prodimage.images-bn.com/pimages/9781455589906_p0_v1_s192x300.jpg\",\n \"buy_url\": \"http://www.barnesandnoble.com/w/truth-or-die-james-patterson/1120509003?ean=9781455584963\",\n  \"createDate\": \"2016-12-26T12:34:13.683Z\"\n},\n{\n  \"_id\": \"5860d4c80db4e2dceef7295f\",\n  \"title\": \"Truth or Die\",\n  \"genre\": \"Suspense\",\n  \"description\": \"Dummy description of book\",\n  \"author\": \"James Patterson\",\n  \"publisher\": \"Brown and Company\",\n  \"pages\": \"480\",\n  \"image_url\": \"http://prodimage.images-bn.com/pimages/9781455589906_p0_v1_s192x300.jpg\",\n  \"buy_url\": \"http://www.barnesandnoble.com/w/truth-or-die-james-patterson/1120509003?ean=9781455584963\",\n  \"createDate\": \"2016-12-26T12:34:13.684Z\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Books",
    "name": "GetApiBooks"
  },
  {
    "type": "get",
    "url": "/api/books/:id",
    "title": "Get A Book By Id",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.id",
            "description": "<p>Book ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.title",
            "description": "<p>Book Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.genre",
            "description": "<p>Book Genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.description",
            "description": "<p>Book's Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.author",
            "description": "<p>Book Author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.publisher",
            "description": "<p>Book Publisher</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.pages",
            "description": "<p>Book Pages</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.image_url",
            "description": "<p>Book Image Link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.buy_url",
            "description": "<p>Book Buy Link</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "genres.createDate",
            "description": "<p>Book Date Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n \"_id\": \"5861134a70e54f1e48f118b1\",\n  \"title\": \"The Alchemist\",\n  \"genre\": \"Suspense\",\n  \"description\": \"The Alchemist description\",\n  \"author\": \"Paulo Coelho\",\n  \"publisher\": \"Random\",\n  \"pages\": \"285\",\n  \"image_url\": \"http://prodimage.images-bn.com/pimages/9780385541190_p0_v4_s192x300.jpg\",\n  \"buy_url\": \"http://www.barnesandnoble.com/w/the-whistler-john-grisham/1123556270?ean=9780385541190\",\n  \"createDate\": \"2016-12-26T12:55:38.060Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Books",
    "name": "GetApiBooksId"
  },
  {
    "type": "post",
    "url": "/api/books",
    "title": "Add A Book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Book's Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Book's Genre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Book's Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Book's Author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Book's Publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pages",
            "description": "<p>Book Pages</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Book's Image Link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buy_url",
            "description": "<p>Book's Buy Link</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input Example",
          "content": "{\n\t\"title\":\"The Whistler\",\n\t\"genre\":\"Action\",\n\t\"description\":\"We expect our judges to be honest and wise. Their integrity is the bedrock of the entire judicial system. We trust them to ensure fair trials, to protect the rights of all litigants, to punish those who do wrong.\",\n\t\"author\":\"John Grisham\",\n\t\"publisher\":\"Random\",\n\t\"pages\":\"300\",\n\t\"image_url\":\"http://prodimage.images-bn.com/pimages/9780385541190_p0_v4_s192x300.jpg\",\n\t\"buy_url\":\"http://www.barnesandnoble.com/w/the-whistler-john-grisham/1123556270?ean=9780385541190\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.id",
            "description": "<p>Book ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.title",
            "description": "<p>Book Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.genre",
            "description": "<p>Book Genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.description",
            "description": "<p>Book's Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.author",
            "description": "<p>Book Author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.publisher",
            "description": "<p>Book Publisher</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.pages",
            "description": "<p>Book Pages</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.image_url",
            "description": "<p>Book Image Link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.buy_url",
            "description": "<p>Book Buy Link</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "genres.createDate",
            "description": "<p>Book Date Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n \"_id\": \"5861134a70e54f1e48f118b1\",\n\"title\": \"The Alchemist\",\n\"genre\": \"Suspense\",\n\"description\": \"The Alchemist description\",\n\"author\": \"Paulo Coelho\",\n\"publisher\": \"Random\",\n\"pages\": \"285\",\n\"image_url\": \"http://prodimage.images-bn.com/pimages/9780385541190_p0_v4_s192x300.jpg\",\n\"buy_url\": \"http://www.barnesandnoble.com/w/the-whistler-john-grisham/1123556270?ean=9780385541190\",\n\"createDate\": \"2016-12-26T12:55:38.060Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Books",
    "name": "PostApiBooks"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "G__Misc_Files_Jobs_TestingFiles_Bookstore_apidoc_main_js",
    "groupTitle": "G__Misc_Files_Jobs_TestingFiles_Bookstore_apidoc_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/genres/:_id",
    "title": "Delete A Genre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Genre ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n\"n\": 1,\n\"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Genres",
    "name": "DeleteApiGenres_id"
  },
  {
    "type": "get",
    "url": "/api/genres",
    "title": "Get All Genres",
    "group": "Genres",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "genres.id",
            "description": "<p>Genre ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genres.name",
            "description": "<p>Genre Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "genres.createDate",
            "description": "<p>Genre Date Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": " {\n [\n  {\n    \"_id\": \"5860d04bebfc35e67b28926f\",\n    \"name\": \"Suspense\",\n    \"createDate\": \"2016-12-26T11:15:06.924Z\"\n  },\n  {\n    \"_id\": \"5860d06cebfc35e67b289270\",\n    \"name\": \"Self Help\",\n    \"createDate\": \"2016-12-26T11:15:06.928Z\"\n  }\n]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Genres",
    "name": "GetApiGenres"
  },
  {
    "type": "post",
    "url": "/api/genres",
    "title": "Add A Genre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input Example",
          "content": "{\n \"name\":\"Book Title\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Genre Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createDate",
            "description": "<p>Genre Date Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": " {\n\"_id\": \"58610b19189c243fb8dbd2f8\",\n\"name\": \"Horror\",\n\"createDate\": \"2016-12-26T12:20:41.965Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Genres",
    "name": "PostApiGenres"
  },
  {
    "type": "put",
    "url": "/api/genres/:_id",
    "title": "Update A Genre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Genre ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input Example",
          "content": "{\n \"name\":\"Book Title\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Genre Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre name</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createDate",
            "description": "<p>Genre Date Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": " {\n\"_id\": \"58610b19189c243fb8dbd2f8\",\n\"name\": \"Fiction\",\n\"createDate\": \"2016-12-26T12:20:41.965Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Genres",
    "name": "PutApiGenres_id"
  }
] });
