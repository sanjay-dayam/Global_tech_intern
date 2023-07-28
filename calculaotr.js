function appendToResult(value) {
    var result = document.getElementById("result");
    result.value += value;
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }
  
  function calculate() {
    var result = document.getElementById("result");
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  }
  