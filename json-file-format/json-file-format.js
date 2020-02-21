"use strict";

let user = {
  name: "John Smith",
  age: 35
};

let jsonUser = JSON.stringify(user, null, 2);
let user2 = JSON.parse(jsonUser);

alert(jsonUser);
alert(user2);

let room = {
  number: 23
};


// Write a replacer function to stringify everything but remove properties that reference "meetup"
let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}), 2);
// Here we also need to test key=="" to exclude the first call where it is normal that value is meetup.

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/