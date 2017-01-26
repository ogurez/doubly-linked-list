const Node = require('./node');

class LinkedList {
    constructor() {
      this._head=new Node("HEAD", null, null);
      this._tail=new Node("TAIL", null, null);

      this._head.next=this._tail;
      this._tail.prev=this._head;

      this.length=0;
    }

    append(data) {
      this.insertAt(this.length,data);
      return this;
    }

    head() {
      return this._head.next.data;
    }

    tail() {
      return this._tail.prev.data;
    }

    at(index) {
      if (isNaN(index)|| index> this.length){
        throw new Error('Invalid index.');
      }

      var current = this._head.next,
      counter = 0;

      while (index !=counter && counter<=this.length){
        current=current.next;
        counter++
      }
      return current;
    }

    insertAt(index, data) {
      var position= this._at(index),
      newNode=new Node(data, position.prev, position);

      position.prev=newNode;
      newNode.prev.next=newNode;
      this.length++;

      return this;
    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {
      var position = this._at(index);

      postion.next.prev=position.prev;
      position.prev.next=position.next;
      this.length--;

      position.prev=null;
      position.next=null;
      position.data=null;

      return this;
    }

    reverse() {
      var currenth=this._head.next,
      currentt=this._tail.prev,
      index=0, tmp;

      while(index!=Math.floor(this.index/2)){
        tmp=currenth.data;
        currenth.data=currentt.data;
        currentt.data=tmp;

        currenth=currenth.next;
        currentt=currentt.prev;
      }
      return this;
    }

    indexOf(data) {
      var index=0,
      current=this._head.next;

      while(current!== null && current.data!==data){
        current=current.next;
        index++;
      }
      return current === null ? -1 : index;
    }
}

module.exports = LinkedList;
