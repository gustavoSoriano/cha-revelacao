

````bash
docker run -d -p 27017:27017 --name=mongo-db mongo:latest
````


## .env
```
SERVER_PORT=9001
SECRET=dsfsdf7dsf9s8dfdsgh
EXPIRES_IN=3600s
MONGO_URI=mongodb://localhost/
MONGO_DEBUG=false
```

## requests
```
GET: http://localhost:9001/api/messages

PUT: http://localhost:9001/api/savename  
{ 
    "name": "teste" 
}

POST: http://localhost:9001/api/dispatch
```
