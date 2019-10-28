# 设计模型

## 构造器模式
提取公共特征，通过传参体现个性特征
```JavaScript
// ES5
function Student(name, scope) {
    this.name = name
    this.scope = scope
    this.level = 1
    this.sum = function () {
        return this.name + '/' + this.scope
    }
}

var whh = new Student('王画画', 13)
var ldd = new Student('李丹丹', 19)


console.log(whh, ldd);
console.log(ldd.sum());
```
```JavaScript
//ES6
class Student {
    constructor(name, scope) {
        this.name = name
        this.scope = scope
    }
    sum() {
        return this.name + '/' + this.scope
    }
}
const xjj = new Student('小鸡鸡', 12)

console.log(xjj);
console.log(xjj.sum());

```
## 原型模式
将公共方法提取出来通过原型指向同一个函数，避免重复
```JavaScript
//ES5
function Student(name, scope) {
    this.name = name
    this.scope = scope
}

Student.prototype.sum = function () {
    return this.name + '/' + this.scope
}

var whh = new Student('王画画', 13)
var ldd = new Student('李丹丹', 19)

console.log(whh, ldd);
console.log(ldd.sum());
```
```JavaScript
//ES6同构造模型
```

## 构建者模式
外层构造器封装对内层构造器的操作
```JavaScript
// ES5
function Student(name, scope) {
    this.name = name
    this.scope = scope
}

function StudentBuilder() {
    this.student = new Student()
    this.build = function () {
        return this.student
    }
    this.setName = function (name) {
        this.student.name = name
    }
    this.setScope = function (scope) {
        this.student.scope = scope
    }

}

var builder = new StudentBuilder()

builder.setName('王画画')
builder.setScope(99)

var whh = builder.build()

console.log(whh);
```
```JavaScript
//ES6同构造模式
```

## 工厂模式
```JavaScript

function Student(name, subjects) {
    this.name = name
    this.subjects = subjects
}

let whh = new Student('王画画', ['zz', 'ls', 'dl'])

console.log(whh);


function factory(name, type) {
    const subjects = type === 0 ? ['a', 'b', 'c'] : ['A', 'B', 'C']
    return new Student(name, subjects)
}

let ldd = factory('李丹丹', 0)

console.log(ldd);
```

## 抽象工厂模式
```JavaScript
function Student(name, subjects) {
    this.name = name
    this.subjects = subjects
}
function Teacher(name, level) {
    this.name = name
    this.level = level
}
function studentFactory(name, type) {
    const subjects = type === 0 ? ['a', 'b', 'c'] : ['A', 'B', 'C']
    return new Student(name, subjects)
}
function teacherFactory(name, level) {
    level = level * 10
    return new Teacher(name, level)
}

function factory(type) {
    if (type === 'student') return studentFactory
    if (type === 'teacher') return teacherFactory
    throw Error('未知类型')
}

let whh = factory('teacher')('王画画', 1)

console.log(whh);

```

## 单例模式
多次实例化生成返回第一次实例对象（保持多个实例状态同步）
```JavaScript
function Resource() {
    if (Resource.instance) return Resource.instance
    else {
        this.balance = 100
        Resource.instance = this
    }
}

let r = new Resource()
console.log(r)
r.balance = 50
console.log(r);

let rr = new Resource()
rr.balance = 55
console.log(rr);

let rrr = new Resource()
console.log(rrr);
```


