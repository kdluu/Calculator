// CALCULATOR.JS
//
//
//

//
var memory = 0;
var result = 0;
class BinCalculator {

    constructor(elementId) {
        this.Model = {
      //    oldVal: undefined
        };

        this.View = {
          textRow1 : {id: "textRow1", type: "text", value: "", onclick:""},

          addittion : {id: "operation", type: "button", value: ' + ', onclick:""},
          substraction : {id: "operation", type: "button", value:' - ', onclick:""},
          multiply : {id: "operation", type: "button", value:' * ', onclick:""},
          division : {id: "operation", type: "button", value:' / ', onclick:""},

          button1 : {id: "button1", type: "button", value: '1', onclick:""},
          button0 : {id: "button0", type: "button", value: '0', onclick:""},

          equals : {id: "equals", type: "button", value: '=', onclick:"answer1()"},
          mod :{ id: "binaryop", type: "button", value: '%', onclick:""},
          sl :{ id: "binaryop", type: "button", value: '<<', onclick:""},
          sr :{ id: "binaryop", type: "button", value: '>>', onclick:""},

          binAND :{ id: "binaryop", type: "button", value: 'AND', onclick:""},
          binOR :{ id: "binaryop", type: "button", value: 'OR', onclick:""},
          binNOT :{ id: "binaryop", type: "button", value: 'NOT', onclick:""},

          clear : {id: "clear", type: "button", value: 'C', onclick:""},
          memrecall : {id: "memrecall", type: "button", value: 'MR', onclick:""},
          memsub : {id: "memsub", type: "button", value: 'M-', onclick:""},
          memadd : {id: "memadd", type: "button", value: 'M+', onclick:""},

          memclear : {id: "memclear", type: "button", value:'MC', onclick:""},
          memset : {id: "memset", type: "button", value:'MS', onclick:""},

          container : document.getElementById(elementId)
        };

        this.Controller = {
          viewClickHandler : function(e) {
             let target = e.target;
             this.buttonHandler(target.value);//Value of button


          }
        };

        this.attachButtonHandlers();
        let htmlString = this.createHTMLforView();
        console.log(htmlString);
        this.View.container.innerHTML = htmlString;
        return this;

    } // end of constructor



    //
    // attachButtonHandlers
    // determines what action is taken when a button is clicked
    // makes sure that when we click on a button or cell, the "this"
    // reference is fixed to that cell
    //
    attachButtonHandlers() {
       this.View.container.onclick
          = this.Controller.viewClickHandler.bind(this);
    }
    //
    // Passing value of button to buttonHandler
    //
    //var display = document.getElementById("textRow1").value;
    buttonHandler(value)
    {
      switch (value) {
        case "=":
          break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
        case '<<':
        case '>>':
        case 'AND':
        case 'OR':
        case 'NOT':
          document.getElementById("textRow1").value += " ";
          break;
        case 'C':
          document.getElementById("textRow1").value = " ";
          break;
        case 'MR':
          document.getElementById("textRow1").value = memory;
          break;
        case 'M+':
          document.getElementById("textRow1").value = parseInt(document.getElementById("textRow1").value) + parseInt(memory);
          break;
        case 'M-':
          document.getElementById("textRow1").value = parseInt(document.getElementById("textRow1").value) - parseInt(memory);
          break;
        case 'MS':
          memory = document.getElementById("textRow1").value;
          break;
        case 'MC':
          memory = 0;
          document.getElementById("textRow1").value = " ";
          break;
        default:
          document.getElementById("textRow1").value += value;
      }

  }
    //
    // createHTMLforView
    // Utility. creates HTML formatted text for the entire view
    //
    createHTMLforView()
    {
      var s;
      s = "<table id=\"myTableBin\" border=2 >"

      // row for results
      s += "<tr><td>" + this.createHTMLforElement(this.View.textRow1) + "</td></tr>";
      s += "<tr><td>";

      // thisulator buttons
      //operation
      s += this.createHTMLforElement(this.View.addittion);
      s += this.createHTMLforElement(this.View.substraction);
      s += this.createHTMLforElement(this.View.multiply);
      s += this.createHTMLforElement(this.View.division);
      s += "<br>";
      s += this.createHTMLforElement(this.View.mod);
      s += this.createHTMLforElement(this.View.sl);
      s += this.createHTMLforElement(this.View.sr);
      s += this.createHTMLforElement(this.View.equals);
      s += "<br>";
      s += this.createHTMLforElement(this.View.binAND);
      s += this.createHTMLforElement(this.View.binOR);
      s += this.createHTMLforElement(this.View.binNOT);

      s += "<br>";
      s += this.createHTMLforElement(this.View.memrecall);
      s += this.createHTMLforElement(this.View.memsub);
      s += this.createHTMLforElement(this.View.memadd);
      s += this.createHTMLforElement(this.View.memclear);
      s += "<br>";


      s += this.createHTMLforElement(this.View.button0);
      s += this.createHTMLforElement(this.View.button1);
      s += this.createHTMLforElement(this.View.clear);
      s += this.createHTMLforElement(this.View.memset);

      s += "</tr></td></table>";
      return s;
    }
    //
    // createHTMLforElement
    // utility. creates html formatted text for an element
    //
    createHTMLforElement(element)
    {
      var s = "<input ";
      s += " id=\"" + element.id + "\"";
      s += " type=\"" + element.type + "\"";
      s += " value= \"" + element.value + "\"";
      s += " onclick= \"" + element.onclick + "\"";
      s += ">";
      return s;
    }
} // end of Calculator;
//Function to calculate the result of textRow1 when click =
function answer1(){
  var onScreen = document.getElementById("textRow1").value;
  // +
  if (onScreen.indexOf("+")!=-1)
  {
  var fields = onScreen.split('+');
  var num1 = parseInt(fields[0],2);
  var num2 = parseInt(fields[1],2);
  var x = num1+num2;
  console.log(x);//Check the calculation in decmimal before convert to binary
  document.getElementById("textRow1").value = x.toString(2);
  }
  //-
  if (onScreen.indexOf("-")!=-1)
  {
  var fields = onScreen.split('-');
  var num1 = parseInt(fields[0],2);
  var num2 = parseInt(fields[1],2);
  var x = num1-num2;
  console.log(x);//Check the calculation in decmimal before convert to binary
  document.getElementById("textRow1").value = x.toString(2);
  }
  //*
  if (onScreen.indexOf("*")!=-1)
  {
  var fields = onScreen.split('*');
  var num1 = parseInt(fields[0],2);
  var num2 = parseInt(fields[1],2);
  var x = num1*num2;
  console.log(x);//Check the calculation in decmimal before convert to binary
  document.getElementById("textRow1").value = x.toString(2);
  }
  // '/'
  if (onScreen.indexOf("/")!=-1)
  {
  var fields = onScreen.split('/');
  var num1 = parseInt(fields[0],2);
  var num2 = parseInt(fields[1],2);
  var x = num1/num2;
  console.log(x);//Check the calculation in decmimal before convert to binary
  document.getElementById("textRow1").value = x.toString(2);
  }
  //document.getElementById("textRow1").value = x;
}
