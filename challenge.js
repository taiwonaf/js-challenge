document.addEventListener("DOMContentLoaded", function(){
  addWavyUnderline(findAllUnorderedListElements());
});

function addWavyUnderline(elements) {
  // takes element as an argument
  elements.forEach(element=>{
    element.style.textDecoration = 'wavy underline'
  })
}

function displayProjects() {
}


function findAllUnorderedListElements() {

  // return all unordered list items
  const nodeItems = document.querySelectorAll('ul>li');
  return nodeItems;
}

function prepareProjects() {
}

exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;









