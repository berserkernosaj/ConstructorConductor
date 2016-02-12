//Create a Person constructor that accepts name and age as parameters and sets those properties
//accordingly in the Constructor.

  //code here
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
      alert(this.name);
    };
  }

//Now create three instances of Person with data you make up

  //code here
  var Jack = new Person("Jack", 97);
  var Dalielah = new Person("Dalielah", 24);
  var Lana = new Person("Lana", 21);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
