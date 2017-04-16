function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lists.length; i < l; i++) {
    let children = lists[i].children

    for (let a = 0, b = children.length; a < b; a++) {
      children[a].innerHTML = parseInt(children[a].innerHTML) + n
    }
  }
}
