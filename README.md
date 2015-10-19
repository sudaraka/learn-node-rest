# Quick RESTful API service using Node.js

Practice code based on the video [Build a RESTful API in 5 Minutes with
NodeJS](https://www.youtube.com/watch?v=MMOIr_VwwAk)
by [Matt Hoiland](https://www.linkedin.com/in/matthoiland)

Note: [Updated video](https://www.youtube.com/watch?v=p-x6WdwaJco) for Express
v4 and some modern Node.js development practices.

## Usage

Run server in one terminal.

```
npm start
```

Send HTTP request to running server using `httpie`.

1. Get products while DB is empty

```
http http://127.0.0.1:3000/api/products
```

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 2
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Oct 2015 07:37:18 GMT
ETag: W/"2-11FxOYiYfpMxmANj4kGJzg"
X-Powered-By: Express

[]
```

2. Add product

```
http post http://127.0.0.1:3000/api/products name="My Product" sku=ABC123 price=12.3
```

```

HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 90
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Oct 2015 07:39:46 GMT
ETag: W/"5a-JsY+AlJVnn71SBtsJfm9ZA"
Vary: X-HTTP-Method-Override
X-Powered-By: Express

{
    "__v": 0,
    "_id": "56249e42051587cf46f1c511",
    "name": "My Product",
    "price": 12.3
    "sku": "ABC123"
}
```

3. Update product

```
http put http://127.0.0.1:3000/api/products/56249e42051587cf46f1c511 name="My Product Modified"
```

```

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 90
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Oct 2015 07:41:09 GMT
ETag: W/"5a-lfG/2oZbg6QGT6EoqDNx3w"
X-Powered-By: Express

{
    "__v": 0,
    "_id": "56249e42051587cf46f1c511",
    "name": "My Product",
    "price": 12.5,
    "sku": "ABC123"
}
```

```
http http://127.0.0.1:3000/api/products
```

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 101
Content-Type: application/json; charset=utf-8
Date: Mon, 19 Oct 2015 07:41:42 GMT
ETag: W/"65-tKZVSzo5b4msUjE3Djc2fw"
X-Powered-By: Express

[
    {
        "__v": 0,
        "_id": "56249e42051587cf46f1c511",
        "name": "My Product Modified",
        "price": 12.5,
        "sku": "ABC123"
    }
]
```

4. Delete product

```
http delete http://127.0.0.1:3000/api/products/56249e42051587cf46f1c511
```

```
HTTP/1.1 204 No Content
Connection: keep-alive
Date: Mon, 19 Oct 2015 07:42:44 GMT
ETag: W/"2-mZFLkyvTelC5g8XnyQrpOw"
X-Powered-By: Express

```
