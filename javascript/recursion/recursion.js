var fruits = [
  {name : 'citrus', 'parent' : null},
  {name : 'melon', 'parent' : null},
  {name : 'orange', 'parent' : 'citrus'},
  {name : 'grapefruit', 'parent' : 'citrus'},
  {name : 'cantelope', 'parent' : 'melon'},
];

function tree(list, parent) {
  let node = {};
  list.filter(function(item){ return item.parent === parent; })
  .forEach(function(item){
    node[item.name] = tree(list, item.name);
  });
  
  return node;
}

console.log(
  JSON.stringify(tree(fruits, null), null, 2)
);