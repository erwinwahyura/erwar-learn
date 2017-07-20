# HACKTIVPRESS

hactivpress adalah sebuah web-apps untuk blogging dimana akan ada 2 collections yaitu users dan articles

## How To Run Step

1. Di dalam folder server lakukan hal sebagai berikut :

```bash
clone the repository first
npm install
node app.js
```
2. Di dalam folder client lakukan hal sebagai berikut :

```bash
npm install
npm run dev
open localhost:8080
```

## API End Point

| METHODS | URL               | KET            |
|---------|-------------------|----------------|
| DELETE  | /api/articles/:id | delete by id   |
| GET     | /api/articles     | get all data   |
| POST    | /api/articles     | post data      |
| PUT     | /api/articles/:id | update data    |
| GET     | /api/articles/:id | get data by id |
