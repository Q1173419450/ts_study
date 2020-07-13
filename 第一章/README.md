## ts 与 js 对比

js 动态类型

ts 是静态类型

## ts 带来的好处是什么？

- 类型定义
- 开发时就能知道是否有语法错误，编辑器更好的语法提示
- 语义清晰

```ts
interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });

// 需要深入代码逻辑
function tsDemo(data) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });
```

## ts 静态类型

变量属性和方法基本固定，编译器会给出对应提示

## 基础类型 & 对象类型

- null、undefined、symbol、boolean、void、number、string
- 对象类型
  - 类
  - 对象
  - 数组
  - 函数类型

```ts
class Person {}
const dell Person = new Person()

const teacher: {
  name: string,
  age: number
} = {
  name: 'CHEN',
  age: 18
}

const arr: number:[] = [1, 2, 3];

const getTotal: () => number = () => {}
```

## 类型注解 & 类型推断 & 类型别名

TS 希望每个类型都是固定的，所以有了类型注解和类型推断

- type annotation 类型注解，我们来定义变量时什么类型
- type interfacence 类型推断，TS 尝试分析告诉我们变量类型
- type alias

## 函数

- never

```ts
// 永远不可能执行完

function errorEmitter(): never {
  throw new Error();

  while (true) {}
}
```

- 函数解构

```ts
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

add({ first: 1, second: 2 });
```

## 其他类型

```ts
const date: Date = new Date();

interface Person {
  name: string;
}
const rawData = '{"name": "chen"}';
const newData: Person = JSON.parse(rawData); // any

// |
const a: number | string = 123;
```

## 数组与元组

```ts
const arr: (number | string)[] = [1, 2, '3'];

interface objArr {
  name: string;
}

const objectArr: objArr[] = [
  {
    name: 'chen',
  },
];

class Teacher {
  name: string,
  age: number
}

const objectArr: objArr[] = [
  {
    name: 'chen',
    age: 18
  },
];
```

- 元祖 约定对应值

长度固定，类型固定

```ts
const teacherInfo: [string, string, number] = ['dell', 'male', 18];

// csv
const list: [string, stirng, number] = [
  ['chen', 'male', 18],
  ['a', 'male', 18],
  ['b', 'male', 18],
];
```

## interface 接口

## 类

```

```