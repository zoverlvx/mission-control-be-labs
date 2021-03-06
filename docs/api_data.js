define({ "api": [
  {
    "type": "delete",
    "url": "/api/users/:userId",
    "title": "Delete A User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of account to be deleted.</p>"
          }
        ]
      }
    },
    "name": "Delete_User",
    "group": "Admin",
    "success": {
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/userRoute.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get All Users",
    "name": "GetAllUsers",
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of all users in the database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"users\": [\n   {\n     \"userId\": \"3a966d8d-efa0-4c30-a5d7-e190f6334056\",\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"email\": \"example1@example1.com\",\n     \"role\": \"example\"\n   },\n   {\n     \"userId\": \"95205b59-1d89-4e9d-9746-c72db32f5779\",\n     \"firstName\": \"Jane\",\n     \"lastName\": \"Doe\",\n     \"email\": \"example2@example2.com\",\n     \"role\": \"example\"\n   },\n   {\n     \"userId\": \"a498a75c-9b59-4036-91f9-e82914a2aaca\",\n     \"firstName\": \"Jim\",\n     \"lastName\": \"Doe\",\n     \"email\": \"example3@example3.com\",\n     \"role\": \"example\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/userRoute.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/users/:role",
    "title": "Get All Users By Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>A Role Name Specified For Each User.</p>"
          }
        ]
      }
    },
    "name": "GetAllUsersByRole",
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of all users with role requested</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"users\": [\n   {\n     \"userId\": \"3a966d8d-efa0-4c30-a5d7-e190f6334056\",\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"email\": \"example1@example1.com\",\n     \"role\": \"example\"\n   },\n   {\n     \"userId\": \"95205b59-1d89-4e9d-9746-c72db32f5779\",\n     \"firstName\": \"Jane\",\n     \"lastName\": \"Doe\",\n     \"email\": \"example2@example2.com\",\n     \"role\": \"example\"\n   },\n   {\n     \"userId\": \"a498a75c-9b59-4036-91f9-e82914a2aaca\",\n     \"firstName\": \"Jim\",\n     \"lastName\": \"Doe\",\n     \"email\": \"example3@example3.com\",\n     \"role\": \"example\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/userRoute.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/users/",
    "title": "Update A Users Role",
    "name": "UpdateAUsersRole",
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"id\": \"95205b59-1d89-4e9d-9746-c72db32f5779\",\n  \"firstName\": \"John\",\n\t \"lastName\": \"Doe\",\n  \"email\": \"example1@example1.com\",\n  \"roleId\": \"a498a75c-9b59-4036-91f9-e82914a2aaca\" - NEW ROLE ID\n}",
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
            "field": "message",
            "description": "<p>Confirmation message on successful request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>List of updated user object with new role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"User Successfully Updated\",\n \"updateUser\": {\n   \"id\": \"95205b59-1d89-4e9d-9746-c72db32f5779\",\n   \"firstName\": \"John\",\n   \"lastName\": \"Doe\",\n   \"email\": \"example1@example1.com\",\n   \"role\": \"example\",\n   \"roleId\": \"a498a75c-9b59-4036-91f9-e82914a2aaca\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/userRoute.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Admin Login Request",
    "name": "Admin_Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"user\": {\n   \"id\": \"cc1804a4-a517-4c36-b100-339b10195923\",\n   \"firstName\": \"John\",\n   \"lastName\": \"Doe\",\n   \"email\": \"example1@example1.com\",\n   \"roleId\": \"cc1804a4-a517-4c36-b100-339b10195923\",\n   \"role\": \"example\"\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"email\": \"example\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRoute.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Admin Register Request",
    "name": "Admin_Register",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"user\": {\n   \"id\": \"cc1804a4-a517-4c36-b100-339b10195923\",\n   \"firstName\": \"John\",\n   \"lastName\": \"Doe\",\n   \"email\": \"example1@example1.com\",\n   \"roleId\": \"cc1804a4-a517-4c36-b100-339b10195923\",\n   \"role\": \"example\"\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": " {\n   \"firstName\": \"example\",\n\t  \"lastName\": \"doe\",\n   \"email\": \"example@random.com\",\n\t  \"password\": \"password\",\n   \"roleId\": \"123abc\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRoute.js",
    "groupTitle": "Auth"
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
    "filename": "./docs/main.js",
    "group": "C__Users_arman_Documents_lambda_copy_labs_mission_control_be_docs_main_js",
    "groupTitle": "C__Users_arman_Documents_lambda_copy_labs_mission_control_be_docs_main_js",
    "name": ""
  },
  {
    "type": "put",
    "url": "/api/users/update/password",
    "title": "Update A Users Password",
    "name": "UpdatePassword",
    "group": "UpdateProfile",
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"email\": \"example1@example1.com\",\n   \"newPassword\": \"password\",\n\t\t\"currentPassword\":\"abc123\"\n}",
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
            "field": "message",
            "description": "<p>Confirmation message on successful request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/userRoute.js",
    "groupTitle": "UpdateProfile"
  }
] });
