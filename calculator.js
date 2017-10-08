// CALCULATOR.JS
//
//
//

//
class Calculator {

    constructor(elementId) {
        this.Model = {
        };

        this.View = {
          textRow : {id: "textRow", type: "text", value: "", onclick:""},
          button7 : {id: "button7", type: "button", value: 7, onclick:""},
          button8 : {id: "button8", type: "button", value: 8, onclick:""},
          button9 : {id: "button9", type: "button", value: 9, onclick:""},
          addittion : {id: "addittion", type: "button", value: '+', onclick:""},

          button4 : {id: "button4", type: "button", value: 4, onclick:""},
          button5 : {id: "button5", type: "button", value: 5, onclick:""},
          button6 : {id: "button6", type: "button", value: 6, onclick:""},
          substraction : {id: "substraction", type: "button", value:'-', onclick:""},

          button1 : {id: "button1", type: "button", value: 1, onclick:""},
          button2 : {id: "button2", type: "button", value: 2, onclick:""},
          button3 : {id: "button3", type: "button", value: 3, onclick:""},
          multiply : {id: "multiply", type: "button", value:'*', onclick:""},

          button0 : {id: "button0", type: "button", value: 0, onclick:""},
          point : {id: "point", type: "button", value: '.', onclick:""},
          equals : {id: "equals", type: "button", value: '=', onclick:""},
          division : {id: "division", type: "button", value:'/', onclick:""},

          clear : {id: "clear", type: "button", value: 'C', onclick:""},
          memrecall : {id: "memrecall", type: "button", value: 'MR', onclick:""},
          memsub : {id: "memsub", type: "button", value: 'M-', onclick:""},
          memadd : {id: "memadd", type: "button", value: 'M+', onclick:""},

          memclear : {id: "memclear", type: "button", value:'MC', onclick:""},



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
    buttonHandler(value)
    {
      document.getElementById("textRow").value += value;
      if (value === 'C'){ // if clear clicked, will clear the display
        document.getElementById("textRow").value="";
      }
      if (value === '=')
      {
        var x = document.getElementById("textRow").value;
        var eq = eval(x);
        document.getElementById("textRow").value = eq;
      }


    }



    //
    // createHTMLforView
    // Utility. creates HTML formatted text for the entire view
    //
    createHTMLforView()
    {
      var s;
      s = "<table id=\"myTable\" border=2>"

      // row for results
      s += "<tr><td>" + this.createHTMLforElement(this.View.textRow) + "</td></tr>";
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
// function answer(){
//   var x = document.getElementById("textRow").value;
//   x = eval("x");
//   document.getElementById("textRow").value = x;
// }
