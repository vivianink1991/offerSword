var addTwoNumbers = function(l1, l2) {
    var head = null;
    var p = null;
    var next = null;
   
    var ten = 0;
    while(l1 && l2) {
        var sum = l1.val + l2.val + ten;
        if (sum > 9) {
            ten = 1;
        } else {
            ten = 0;
        }
        sum = sum % 10;
        if (head === null) {
            head = {
                val: sum,
                next: null
            };
            p = head;
        } else {
            next = {
                val: sum,
                next: null
            };
            p.next = next;
            p = next;
        }
        
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1) {
        var sum = l1.val + ten;
        if (sum > 9) {
            ten = 1;
        } else {
            ten = 0;
        }
        sum = sum % 10;
        next = {
            val: sum,
            next: null
        };
        p.next = next;
        p = next;
        l1 = l1.next;
    }
    
    while(l2) {
        var sum = l2.val + ten;
        if (sum > 9) {
            ten = 1;
        } else {
            ten = 0;
        }
        sum = sum % 10;
        next = {
            val: sum,
            next: null
        };
        p.next = next;
        p = next;
        l2 = l2.next;
    }
    if (ten) {
        p.next = {
            val: ten,
            next: null
        };
    }
    
    return head;
};

var node2 = {
    val: 9,
    next: null
};

var node1 = {
    val: 9,
    next: node2
};

var node3 = {
    val: 1,
    next: null
};
var res = addTwoNumbers(node1, node3);
console.log(res);



