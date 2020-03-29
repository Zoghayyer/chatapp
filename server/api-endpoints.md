## Messages API
 - http://localhost:8080/api/rooms/0/messages
  - `GET /rooms/<id>/messages`
    - Response shape:
    ```
    [
      {
        name: String,
        message: String,
        userId: String,
      }
    ]
    ```
    - messages are ordered by time
  - `POST /rooms/<id>/messages`
    - Expected payload shape:
    ```
    {
      name: String,
      message: String,
      userId: String,
    }
    ```


## RoomsList API
- http://localhost:8080/api/rooms
  - `GET /rooms`
    - Response shape:
    ```
    [
      {
        id: Integer,
        name: String,
      }
    ]
    ```


## RoomsDetail API
- http://localhost:8080/api/rooms/0
  - `GET /rooms/<id>`
    - Response shape:
    ```
    {
      id: Integer,
      name: String,
      users: String[],
    }
    ```
