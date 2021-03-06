// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.locoation = attributes.locoation;
    this.age = attributes.age;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.locoation}.`);
  }
}

// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  gradeStudent(student) {
    student.grade = Math.random() > 0.5 ? student.grade - 5 : student.grade + 5;
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.favSubject = attributes.favSubject;
    this.className = attributes.className;
    this.grade = attributes.grade;
  }
  listsSubjects() {
    console.log("My favorite subjects are;");
    this.favSubject.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `FSW15`
});

const charlie = new Student({
  name: "Charlie",
  location: "Mars",
  age: 20,
  gender: "male",
  favSubject: ["C", "Math", "astrophysics"],
  previousBackground: "Front-end",
  className: `Don't forget the homies`,
  grade: 100
});

const tracy = new ProjectManagers({
  name: "Tracy",
  location: "Venus",
  age: 28,
  gender: "Female",
  favInstructor: "Kuh-nell",
  gradClassName: `CS5`
});

const freddy = new Instructor({
  name: "Freddy",
  location: "Da Bed",
  age: 100,
  gender: "Male",
  favLanguage: "Spanish",
  specialty: "Back-end",
  catchPhrase: `Where did all the Cupcakes go`
});

const juan = new Student({
  name: "Juan",
  location: "Canada",
  age: 20,
  gender: "Male",
  favSubject: ["C", "Math", "astrophysics"],
  previousBackground: "Front-end",
  className: `FSW5000`,
  grade: 50
});

const tony = new ProjectManagers({
  name: "Tony",
  location: "San Juan",
  age: 28,
  gender: "Male",
  favInstructor: "Nelly",
  gradClassName: `CS1`
});

fred.demo("Python");
fred.grade(charlie, "Pyhton");
charlie.listsSubjects();
charlie.PRAssignment("React");
charlie.sprintChallenge("Redux");
tracy.standUp("#FSW15_Tracy");
tracy.debugsCode(charlie, "Quantum Physics");

freddy.demo("Computer Science");
freddy.grade(charlie, "Py");
juan.listsSubjects();
juan.PRAssignment("React Native");
juan.sprintChallenge("Flexbox");
tony.standUp("#FSW5000_Tony");
tony.debugsCode(charlie, "Quantum Machines");

fred.gradeStudent(juan);
console.log(juan.grade);
