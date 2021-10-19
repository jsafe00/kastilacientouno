//Execute a JavaScript immediately after a page has been loaded
window.onload = function() {

  //Data for terms and definitions. This can be stored in a separate .js file, in a JSON file or here in the main file
  var data = {
    terms: [{
        index: 0,
        text: "poder"
      }, {
        index: 1,
        text: "acerca de"
      }, {
        index: 2,
        text: "encima"
      }, {
        index: 3,
        text: "extranjero"
      }, {
        index: 4,
        text: "ausencia"
      }, {
        index: 5,
        text: "realizar"
      }, {
        index: 6,
        text: "conforme"
      }, {
        index: 7,
        text: "lograr"
      }, {
        index: 8,
        text: "logro"
      }, {
        index: 9,
        text: "reconocer"
      }, 

    ],
    definitions: [{
        index: 0,
        text: "able"
      }, {
        index: 1,
        text: "about"
      }, {
        index: 2,
        text: "above"
      }, {
        index: 3,
        text: "abroad"
      }, {
        index: 4,
        text: "absence"
      }, {
        index: 5,
        text: "accomplish"
      }, {
        index: 6,
        text: "according"
      }, {
        index: 7,
        text: "achieve"
      }, {
        index: 8,
        text: "achievement"
      }, {
        index: 9,
        text: "acknowledge"
      }, 

    ],
    //this creates matches for indexes. This is a sort of an Answer Sheet
    pairs: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
    }
  };

  var selectedTerm = null, //to make sure none is selected onload
    selectedDef = null,
    termsContainer = document.querySelector("#terms"), //list of terms
    defsContainer = document.querySelector("#defs"); //list of definitions

  //This function takes two arguments, that is one term and one def to compare if they match. It returns True or False after compairing values of the "pairs" object property.     
  function isMatch(termIndex, defIndex) {
    return data.pairs[termIndex] === defIndex;
  }

  //This function adds HTML elements and content to the specified container (UL).
  function createListHTML(list, container) {
    container.innerHTML = ""; //first, clean up any existing LI elements
    for (var i = 0; i < 10; i++) {
      container.innerHTML = container.innerHTML + "<li data-index='" + list[i]["index"] + "'>" + "<span>" + list[i]["text"] + "</span>" + "</li>";
      //OR shorter version: container.innerHTML += "<li data-index='" + list[i]["index"] + "'>" + list[i]["text"] + "</li>";
    }
  }

  createListHTML(data.terms, termsContainer);
  createListHTML(data.definitions, defsContainer);

  //listen for a "click" event on a list of Terms and store the clicked object in the target object
  termsContainer.addEventListener("click", function(e) {
    var target = e.target.parentNode;
    if (target.className === "score")
      return;
    var termIndex = Number(target.getAttribute("data-index"));

    if (selectedTerm !== null && selectedTerm !== termIndex) {
      termsContainer.querySelector("li[data-index='" + selectedTerm + "']").removeAttribute("data-selected");
    }

 
    if (target.hasAttribute("data-selected")) {
      target.removeAttribute("data-selected");
      selectedTerm = null;
    }
 
    else {
      target.setAttribute("data-selected", true);
      selectedTerm = termIndex;
    }

    if (selectedTerm !== null && selectedDef !== null) {
      var term = document.querySelector("#terms [data-index='" + selectedTerm + "']");
      var def = document.querySelector("#defs [data-index='" + selectedDef + "']");
      if (isMatch(selectedTerm, selectedDef)) {
        term.className = "score";
        def.className = "score";
      }

      countPairs();
      selectedTerm = null;
      selectedDef = null;
      term.removeAttribute("data-selected");
      def.removeAttribute("data-selected");

    }
  })

  defsContainer.addEventListener("click", function(e) {
    var target = e.target.parentNode;
    if (target.className === "score")
      return;
    var defIndex = Number(target.getAttribute("data-index"));

    if (selectedDef !== null && selectedDef !== defIndex) {
      defsContainer.querySelector("li[data-index='" + selectedDef + "']").removeAttribute("data-selected");
    }

    if (target.hasAttribute("data-selected"))
      target.removeAttribute("data-selected");
    else
      target.setAttribute("data-selected", true);
    selectedDef = Number(target.getAttribute("data-index"));
    if (selectedTerm !== null && selectedDef !== null) {
      //var term = document.querySelector("#terms [data-index='"+selectedTerm+"']");
      var term = termsContainer.querySelector("[data-index='" + selectedTerm + "']");
      //var def = document.querySelector("#defs [data-index='"+selectedDef+"']");
      var def = defsContainer.querySelector("[data-index='" + selectedDef + "']");
      if (isMatch(selectedTerm, selectedDef)) {
        term.className = "score";
        def.className = "score";
      }

      countPairs();
      selectedTerm = null; 
      selectedDef = null; 
      term.removeAttribute("data-selected");
      def.removeAttribute("data-selected");
    }
  })

  document.getElementsByClassName('set-2')[0].style.visibility = 'hidden';

  function countPairs() {
    var tryterms = termsContainer.querySelectorAll("li");
    for (var i = 0; i < tryterms.length; i++) {
        saf = document.getElementsByClassName("score").length;
        console.log(saf);
        if(saf == 20) {
          document.getElementsByClassName('set-2')[0].style.visibility = 'visible';
        }
     }
  }

  function reset() {
    var resetTerms = termsContainer.querySelectorAll("li");
    var resetDefs = defsContainer.querySelectorAll("li");
    for (var i = 0; i < resetTerms.length; i++) {
      resetTerms[i].removeAttribute("class", "score");
      resetTerms[i].removeAttribute("data-selected");
    }
    for (i = 0; i < resetDefs.length; i++) {
      resetDefs[i].removeAttribute("class", "score");
      resetDefs[i].removeAttribute("data-selected");
    }

    selectedTerm = null;
    selectedDef = null;
  }

  function shuffle() {
    randomSort(data.terms)
    randomSort(data.definitions)
    createListHTML(data.terms, termsContainer)
    createListHTML(data.definitions, defsContainer)
  }

  function randomSort(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element. SWAP
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffle();
  document.querySelector("button").addEventListener("click", function() {
    reset();
    termsContainer.setAttribute("class", "fadeOut");
    defsContainer.setAttribute("class", "fadeOut");
    setTimeout(function() {
        shuffle();
        termsContainer.removeAttribute("class", "fadeOut");
        defsContainer.removeAttribute("class", "fadeOut");
      }, 450)
      //shuffle();

  });

}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();

  
});

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}