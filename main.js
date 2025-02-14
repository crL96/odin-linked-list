import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.prepend("fish");
list.append("snake");
list.pop();
list.append("turtle");

console.log(list.toString());