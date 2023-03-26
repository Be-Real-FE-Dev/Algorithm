const returnKthToLast = (head,k) => {
  let n = 0;
  let temp = head;
  while(temp){
    n++;
    temp = temp.next;
  }
  let pos = n-k;
  while(pos&& head){
    pos--;
    head = head.next;

    return head;
  }
}