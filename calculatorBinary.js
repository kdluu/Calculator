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
          button7 : {id: "button7", type: "button", value: '0111', onclick:""},
          button8 : {id: "button8", type: "button", value: '1000', onclick:""},
          button9 : {id: "button9", type: "button", value: '1001', onclick:""},
          addittion : {id: "operation", type: "button", value: ' + ', onclick:""},

          button4 : {id: "button4", type: "button", value: '0100', onclick:""},
          button5 : {id: "button5", type: "button", value: '0101', onclick:""},
          button6 : {id: "button6", type: "button", value: '0110', onclick:""},
          substraction : {id: "operation", type: "button", value:' - ', onclick:""},

          button1 : {id: "button1", type: "button", value: '0001', onclick:""},
          button2 : {id: "button2", type: "button", value: '0010', onclick:""},
          button3 : {id: "button3", type: "button", value: '0011', onclick:""},
          multiply : {id: "operation", type: "button", value:' * ', onclick:""},

          button0 : {id: "button0", type: "button", value: '0000', onclick:""},
          point : {id: "point", type: "button", value: '.', onclick:""},
          equals : {id: "equals", type: "button", value: '=', onclick:"answer1()"},
          division : {id: "operation", type: "button", value:' / ', onclick:""},

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
      s += this.createHTMLforElement(this.View.button7);
      s += this.createHTMLforElement(this.View.button8);
      s += this.createHTMLforElement(this.View.button9);
      s += this.createHTMLforElement(this.View.addittion);

      s += "<br>";
      s += this.createHTMLforElement(this.View.button4);
      s += this.createHTMLforElement(this.View.button5);
      s += this.createHTMLforElement(this.View.button6);
      s += this.createHTMLforElement(this.View.substraction);
      s += "<br>";
      s += this.createHTMLforElement(this.View.button1);
      s += this.createHTMLforElement(this.View.button2);
      s += this.createHTMLforElement(this.View.button3);
      s += this.createHTMLforElement(this.View.multiply);
      s += "<br>";
      s += this.createHTMLforElement(this.View.button0);
      s += this.createHTMLforElement(this.View.point);
      s += this.createHTMLforElement(this.View.equals);
      s += this.createHTMLforElement(this.View.division);
      s += "<br>";
      s += this.createHTMLforElement(this.View.clear);
      s += this.createHTMLforElement(this.View.memrecall);
      s += this.createHTMLforElement(this.View.memsub);
      s += this.createHTMLforElement(this.View.memadd);
      s += "<br>";
      s += this.createHTMLforElement(this.View.memclear);
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
