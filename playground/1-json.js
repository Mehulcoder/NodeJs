var userJson =
{
    "name": "Andrew",
    "planet": "Earth",
    "age": 27
};

userJson.name = "Mehul";
userJson.age = "20";
var user = JSON.stringify(userJson);
var bufferdata = JSON.parse(user);
console.log(user);


