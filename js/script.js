//Execute a JavaScript immediately after a page has been loaded
window.onload = function() {

  //Data for terms and definitions. This can be stored in a separate .js file, in a JSON file or here in the main file
  var data = {
    terms: [{
        index: 0,
        text: "monto"
      }, {
        index: 1,
        text: "pagaré"
      }, {
        index: 2,
        text: "plazo"
      }, {
        index: 3,
        text: "tasa"
      }, {
        index: 4,
        text: "IVA"
      }, {
        index: 5,
        text: "tarjeta"
      }, {
        index: 6,
        text: "emision"
      }, {
        index: 7,
        text: "desembolso" 
      }, {
        index: 8,
        text: "bancaria"
      }, {
        index: 9,
        text: "adeudado"
      }, {
        index: 10,
        text: "deudas" 
      }, {
        index: 11,
        text: "meses"
      }, {
        index: 12,
        text: "préstamo"
      }, {
        index: 13,
        text: "usuario"
      }, {
        index: 14,
        text: "llmadas" 
      }, {
        index: 15,
        text: "cambiar"
      }, {
        index: 16,
        text: "descargar"
      }, {
        index: 17,
        text: "crear" 
      }, {
        index: 18,
        text: "rechazadas"
      }, {
        index: 19,
        text: "ofertas"
      }, {
        index: 20,
        text: "vigencia"
      }, {
        index: 21,
        text: "gestión"
      }, {
        index: 22,
        text: "pendientes" 
      }, {
        index: 23,
        text: "habilitación"
      }, {
        index: 24,
        text: "prueba"
      }, {
        index: 25,
        text: "cambio" 
      }, {
        index: 26,
        text: "abiertas"
      }, {
        index: 27,
        text: "otros"
      }, {
        index: 28,
        text: "cobrará"
      }, {
        index: 29,
        text: "atentamente"
      }, {
        index: 30,
        text: "valor" 
      }, {
        index: 31,
        text: "siguiente"
      }, {
        index: 32,
        text: "descuento"
      }, {
        index: 33,
        text: "pagos"
      }, {
        index: 34,
        text: "otorgada"
      }, {
        index: 35,
        text: "encuentra" 
      }, {
        index: 36,
        text: "agradeciendo"
      }, {
        index: 37,
        text: "antemano"
      }, {
        index: 38,
        text: "promete" 
      }, {
        index: 39,
        text: "revisada"
      }
      // }, {
      //   index: 40,
      //   text: "generen"
      // }, 

    ],
    definitions: [{
        index: 0,
        text: "amount"
      }, {
        index: 1,
        text: "I will pay"
      }, {
        index: 2,
        text: "term"
      }, {
        index: 3,
        text: "rate"
      }, {
        index: 4,
        text: "VAT"
      }, {
        index: 5,
        text: "card"
      }, {
        index: 6,
        text: "issue"
      }, {
        index: 7,
        text: "disbursement"
      }, {
        index: 8,
        text: "bank"
      }, {
        index: 9,
        text: "owned"
      }, {
        index: 10,
        text: "debts"
      }, {
        index: 11,
        text: "months"
      }, {
        index: 12,
        text: "loan"
      }, {
        index: 13,
        text: "username"
      }, {
        index: 14,
        text: "call"
      }, {
        index: 15,
        text: "change"
      }, {
        index: 16,
        text: "to download"
      }, {
        index: 17,
        text: "create"
      }, {
        index: 18,
        text: "rejected"
      }, {
        index: 19,
        text: "offers"
      }, {
        index: 20,
        text: "validity"
      }, {
        index: 21,
        text: "management"
      }, {
        index: 22,
        text: "slopes"
      }, {
        index: 23,
        text: "qualification"
      }, {
        index: 24,
        text: "proof"
      }, {
        index: 25,
        text: "change"
      }, {
        index: 26,
        text: "open"
      }, {
        index: 27,
        text: "others"
      }, {
        index: 28,
        text: "bill to"
      }, {
        index: 29,
        text: "sincerely"
      }, {
        index: 30,
        text: "value"
      }, {
        index: 31,
        text: "following"
      }, {
        index: 32,
        text: "discount"
      }, {
        index: 33,
        text: "payments"
      }, {
        index: 34,
        text: "granted"
      }, {
        index: 35,
        text: "find"
      }, {
        index: 36,
        text: "thanking"
      }, {
        index: 37,
        text: "beforehand"
      }, {
        index: 38,
        text: "promises"
      }, {
        index: 39,
        text: "reviewed"
      }
      // }, {
      //   index: 40,
      //   text: "generate"
      // },  

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
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      36: 36,
      37: 37,
      38: 38,
      39: 39,
      40:40
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
    for (var i = 0; i < 40; i++) {
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
        if(saf == 80) {
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

// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();

  
// });

// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }