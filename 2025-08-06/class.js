class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHi () {
        console.log(`${this.name}: 안녕하세요`)
    }
}

const p1 = new Person("홍길동", 30, "남자");  
console.log(p1);
p1.sayHi();

const p2 = new Person("허균", 31, "남자");
console.log(p2);
p2.sayHi();

//

class Student extends Person {
    constructor(name, age, gender, score) {
        super(name, age, gender) // 부모 클래스의 constructor를 호출하는 키워드
        this.score = score;
    }
    study () {
        console.log(`${this.name}: class 공부중..`)
    }
    sayHi () {
        console.log(`${this.name}: 반갑습니다`)
    }
}

const s1 = new Student("오즈", 20, "남자", 80)
console.log(s1)
s1.sayHi();
s1.study();