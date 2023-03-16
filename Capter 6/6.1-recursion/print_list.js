let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListRec(list) {
        if (list.next){
            console.log(list.value);
            printListRec(list.next);
        }else {
            console.log(list.value);
        }
}
function printList(list) {
    let currentItem = list;
    while (true){
        if (!currentItem.next){
            console.log(currentItem.value);
            break;
        }else {
            console.log(currentItem.value);
        }
        currentItem = currentItem.next;
    }
}

//printList(list)
printListRec(list)