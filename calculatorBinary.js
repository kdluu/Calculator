// BINARYCALCULATOR.JS
var memory = 0;
var result = 0;
document.addEventListener("click", function (e) {
  var level = 0;
  for (var element = e.target; element; element = element.parentNode) {
    if (element.id === 'myTable' || element.id === 'myTableBin') {
      return;
    }
    level++;
  }
  alert("Please click on Calculator");
});
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

          ANDbin :{ id: "binaryop", type: "button", value: ' AND ', onclick:""},
          ORbin :{ id: "binaryop", type: "button", value: ' OR ', onclick:""},
          NOTbin :{ id: "binaryop", type: "button", value: ' NOT ', onclick:""},

          clear : {id: "clear", type: "button", value: 'C', onclick:""},

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
        case 'C':
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
      s += this.createHTMLforElement(this.View.ANDbin);
      s += "<br>";

      s += this.createHTMLforElement(this.View.ORbin);
      s += this.createHTMLforElement(this.View.NOTbin);
      s += this.createHTMLforElement(this.View.clear);
      s += "<br>";
      s += this.createHTMLforElement(this.View.button0);
      s += this.createHTMLforElement(this.View.button1);
      s += this.createHTMLforElement(this.View.equals);


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
  // % mod
  if (onScreen.indexOf("%")!=-1)
  {
    var fields = onScreen.split('%');
    var num1 = parseInt(fields[0],2);
    var num2 = parseInt(fields[1],2);
    var x = num1%num2;
    console.log(num1);
    console.log(num2);
    console.log(x);//Check the calculation in decmimal before convert to binary
    document.getElementById("textRow1").value = x.toString(2);
  }
  // Left shift
  // IDEA: The idea of left shift is convert the number to decimal and use builtin
  // operation <<, then convert the result back to binary
  if (onScreen.indexOf("<")!=-1)
  {
    var fields = onScreen.split('%');
    var num1 = parseInt(fields[0],2);
    var x = num1 << 1;
    // console.log(num1);
    // console.log(x);//Check the calculation in decmimal before convert to binary
    document.getElementById("textRow1").value = x.toString(2);
  }
  // Right shift
  // IDEA: The idea of left shift is convert the number to decimal and use builtin
  // operation >>, then convert the result back to binary
  if (onScreen.indexOf(">")!=-1)
  {
    var fields = onScreen.split('%');
    var num1 = parseInt(fields[0],2);
    var x = num1 >> 1;
    document.getElementById("textRow1").value = x.toString(2);
  }
  // ANDbin
  if (onScreen.indexOf("AND")!=-1)
  {
    var fields = onScreen.split('AND');
    var num1 = parseInt(fields[0],2);
    var num2 = parseInt(fields[1],2);
    var x = num1 & num2;
    document.getElementById("textRow1").value = x.toString(2);
  }
  // ORbin
  if (onScreen.indexOf("OR")!=-1)
  {
    var fields = onScreen.split('OR');
    var num1 = parseInt(fields[0],2);
    var num2 = parseInt(fields[1],2);
    var x = num1 | num2;
    document.getElementById("textRow1").value = x.toString(2);
  }
  // NOTbin
  if (onScreen.indexOf("NOT")!=-1)
  {
    var fields = onScreen.split('NOT');
    var l = fields[0];
    var le = l.trim().length;
    var num1 = parseInt(fields[0],2);
    var x = ~ num1 & (Math.pow(2,le)-1);
    document.getElementById("textRow1").value = x.toString(2);
  }

}
