interface objArr {
  name: string;
  age: number;
}

const objectArr: objArr[] = [
  {
    name: 'chen',
    age: 18,
  },
];

console.log(objectArr[0].name);

class Person {
  name: 'dell';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }

  getName() {
    return 'le';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
