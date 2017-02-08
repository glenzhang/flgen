let topPosition = function(domEl) {
    if (!domEl) {
        return 0;
    }
    return domEl.offsetTop + topPosition(domEl.offsetParent);
}

let leftPosition = function(domEl) {
    if (!domEl) {
        return 0;
    }
    return domEl.offsetLeft + leftPosition(domEl.offsetParent);
}

//getBoundingClientRect
let getOffset = function(domEl) {
    let offset = {
        top: 0,
        left: 0
    };

    // if (!domEl || domEl == document.body) { //当该节点为body节点时，结束递归
    //     return offset;
    // }
    while (domEl) {
        offset.top += domEl.offsetTop;
        offset.left += domEl.offsetLeft;
        domEl = domEl.offsetParent;
    }

    return offset;
}

getOffset(document.querySelector('#kw'))

function getOffset(element, target) {
    var element = document.getElementById(element),
        target = target ? document.getElementById(target) : window;
    var offset = { top: element.offsetTop, left: element.offsetLeft },
        parent = element.offsetParent;

    while (parent != null && parent != target) {
        offset.left += parent.offsetLeft;
        offset.top += parent.offsetTop;
        parent = parent.offsetParent;
    }

    return offset;
}