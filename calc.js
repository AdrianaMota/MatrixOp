const c1 = document.getElementsByClassName("i1")[0];
const f1 = document.getElementsByClassName("i2")[0];
const c2 = document.getElementsByClassName("i3")[0];
const f2 = document.getElementsByClassName("i4")[0];
const generar = document.getElementsByClassName("generar")[0];
const limpiar = document.getElementsByClassName("limpiar")[0];
const cont2 = document.getElementById("cont2")[0];

let m1, m2;

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  return true;
}

function fillMatrix(input1, input2) {
  const matrix = [],
    n = parseInt(input1.value, 10),
    m = parseInt(input2.value, 10);

  const container = document.createElement("div");
  container.classList.add("matrix");

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    //Creamos un div para cada fila
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < m; j++) {
      matrix[i][j] = Math.floor(Math.random() * 10);

      let num = document.createElement("label");

      num.classList.add("number");
      num.innerHTML = matrix[i][j];
      //Agregamos los labels a las filas
      row.appendChild(num);
    }

    // Una vez terminado de agregar los elementos a la fila
    // lo colocamos en el contenedor principal
    container.appendChild(row);
  }

  //Finalmente agregamos la matriz o contenedor al DOM
  document.getElementById("matrixes").appendChild(container);
  return matrix;
}

function limpiarMat() {
  let myNode = document.getElementById("cont2");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
function limpiarTextbox(textbox) {
  textbox.value = "";
}

generar.addEventListener("click", () => {
  limpiarMat();

  const container = document.createElement("div");
  container.id = "matrixes";

  document.getElementById("cont2").appendChild(container);

  if (
    !c1.value.length ||
    !c2.value.length ||
    !f2.value.length ||
    !f1.value.length
  ) {
    return alert("Todas las casillas deben estar completas!");
  }

  m1 = fillMatrix(c1, f1);
  m2 = fillMatrix(c2, f2);
  op();

  //Para el funcionamiento si las matrices no son arreglos
  if (!Array.isArray(m1) && !Array.isArray(m2)) return;

  // console.log(m1, m2);
});

function mult(m1, m2) {
  var aNumRows = m1.length,
    aNumCols = m1[0].length,
    bNumRows = m2.length,
    bNumCols = m2[0].length,
    m = new Array(aNumRows);

  const multContainer = document.createElement("div");
  multContainer.classList.add("matrixSum");

  const multLabel = document.createElement("label");
  multLabel.classList.add("description");
  multLabel.innerHTML =
    "El producto de dos veces la primra matriz, por el logaritmo de los elementos de la segunda matriz es:";
  document.getElementById("cont2").appendChild(multLabel);

  for (var r = 0; r < aNumRows; ++r) {
    let multRow = document.createElement("div");
    multRow.classList.add("row");
    m[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (var i = 0; i < aNumCols; ++i) {
        if (m2[i][c] != 0) {
          m[r][c] += 2 * m1[r][i] * Math.floor(Math.log(m2[i][c]));
        } else {
          return alert(
            "No se puede realizar el logaritmo de 0, por favor intente denuevo"
          );
        }
      }
      let rMult = document.createElement("label");
      rMult.classList.add("rSum");
      rMult.innerHTML = m[r][c];
      multRow.appendChild(rMult);
    }
    multContainer.appendChild(multRow);
  }

  document.getElementById("cont2").appendChild(multContainer);

  return m;
}

function mult2(m1, m2) {
  var aNumRows = m1.length,
    aNumCols = m1[0].length,
    bNumRows = m2.length,
    bNumCols = m2[0].length,
    m = new Array(aNumRows);

  const multContainer = document.createElement("div");
  multContainer.classList.add("matrixSum");

  const multLabel = document.createElement("label");
  multLabel.classList.add("description");
  multLabel.innerHTML =
    "La raiz cuadrada del producto los elementos de la primera matriz elevados al cubo, por la segunda matriz es:";
  document.getElementById("cont2").appendChild(multLabel);

  for (var r = 0; r < aNumRows; ++r) {
    let multRow = document.createElement("div");
    multRow.classList.add("row");
    m[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (var i = 0; i < aNumCols; ++i) {
        if (m2[i][c] != 0) {
          m[r][c] += Math.pow(m1[r][i], 3) * m2[i][c];
        }
      }
      let rMult = document.createElement("label");
      rMult.classList.add("rSum");
      rMult.innerHTML = Math.floor(Math.sqrt(m[r][c]));
      multRow.appendChild(rMult);
    }
    multContainer.appendChild(multRow);
  }

  document.getElementById("cont2").appendChild(multContainer);

  return m;
}

function sum() {
  (n = parseInt(c1.value, 10)), (m = parseInt(f1.value, 10));
  const SumContainer = document.createElement("div");
  SumContainer.classList.add("matrixSum");

  const sumLabel = document.createElement("label");
  sumLabel.classList.add("description");
  sumLabel.innerHTML =
    "La suma de tres veces la primera matriz mas cuatro veces la segunda es:";
  document.getElementById("cont2").appendChild(sumLabel);

  const sumMat = [];

  for (let i = 0; i < n; i++) {
    let sumRow = document.createElement("div");
    sumRow.classList.add("row");
    sumMat[i] = [];

    for (let j = 0; j < m; j++) {
      sumMat[i][j] = 3 * m1[i][j] + 4 * m2[i][j];

      let rSum = document.createElement("label");
      rSum.classList.add("rSum");
      rSum.innerHTML = sumMat[i][j];

      sumRow.appendChild(rSum);
    }

    SumContainer.appendChild(sumRow);
  }
  document.getElementById("cont2").appendChild(SumContainer);

  return sumMat;
}

function rest() {
  (n = parseInt(c1.value, 10)), (m = parseInt(f1.value, 10));
  const restContainer = document.createElement("div");
  restContainer.classList.add("matrixSum");

  const restLabel = document.createElement("label");
  restLabel.classList.add("description");
  restLabel.innerHTML =
    "La substracción de la primera matriz, menos la raiz cuadrada de los elementos de la segunda es:";
  document.getElementById("cont2").appendChild(restLabel);

  const restMat = [];

  for (let i = 0; i < n; i++) {
    let restRow = document.createElement("div");
    restRow.classList.add("row");
    restMat[i] = [];

    for (let j = 0; j < m; j++) {
      restMat[i][j] = m1[i][j] - Math.floor(Math.sqrt(m2[i][j]));

      let rRest = document.createElement("label");
      rRest.classList.add("rSum");
      rRest.innerHTML = restMat[i][j];

      restRow.appendChild(rRest);
    }

    restContainer.appendChild(restRow);
  }
  document.getElementById("cont2").appendChild(restContainer);
  return restMat;
}

function recursiveLinearSearch(matrix, l, r, elToFind) {
  if (r < l) return -1;
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[l][i] === elToFind) return [l + 1, i + 1];
    if (matrix[r][i] === elToFind) return [r + 1, i + 1];
  }

  return recursiveLinearSearch(matrix, l + 1, r - 1, elToFind);
}
function recursiveResult() {
  const cuaContainer = document.createElement("div");
  cuaContainer.classList.add("cuadrada");

  let cuaLabel = document.createElement("label");
  cuaLabel.classList.add("cualbl");

  if (recursiveLinearSearch(m1, 1, m1.length - 1, 3) === -1) {
    cuaLabel.innerHTML = "no hay ningun valor igual a 3 en la primera matriz";
  } else {
    cuaLabel.innerHTML =
      "El valor en la posición " +
      "[" +
      recursiveLinearSearch(m1, 1, m1.length - 1, 3) +
      "]" +
      " es 3";
  }

  cuaContainer.appendChild(cuaLabel);
  document.getElementById("cont2").appendChild(cuaContainer);
}

function biggestElement(matrix) {
  const cuaContainer = document.createElement("div");
  cuaContainer.classList.add("cuadrada");

  let cuaLabel = document.createElement("label");
  cuaLabel.classList.add("cualbl");

  let biggestNum = Number.NEGATIVE_INFINITY;
  matrix.forEach(row =>
    row.forEach(col => (biggestNum = Math.max(biggestNum, col)))
  );
  cuaLabel.innerHTML =
    "El numero mas grande de la primera matriz es " + biggestNum;

  cuaContainer.appendChild(cuaLabel);
  document.getElementById("cont2").appendChild(cuaContainer);
}

function cuadrada() {
  function cuadradaFilter(orden, matriz) {
    n = parseInt(orden.value, matriz);

    const newMat = [];
    for (let i = 0; i < n; i++) {
      newMat[i] = [];
      for (let j = 0; j < n; j++) {
        newMat[i][j] = matriz[j][i];
      }
    }

    if (JSON.stringify(newMat) === JSON.stringify(matriz)) {
      return true;
    }
  }

  const cuaContainer = document.createElement("div");
  cuaContainer.classList.add("cuadrada");

  let cuaLabel = document.createElement("label");
  cuaLabel.classList.add("cualbl");

  if (cuadradaFilter(c1, m1) === true && cuadradaFilter(c2, m2) === true) {
    cuaLabel.innerHTML = "Ambas matrices son simétricas!";
  } else {
    cuaLabel.innerHTML = "No ambas matrices son simétricas!";
  }

  cuaContainer.appendChild(cuaLabel);
  document.getElementById("cont2").appendChild(cuaContainer);
}

function op() {
  if (c1.value == c2.value && f1.value == f2.value) {
    if (f1.value == c2.value) {
      mult(m1, m2);
      mult2(m1, m2);
      sum();
      rest();
      cuadrada();
      recursiveResult();
      biggestElement(m1);
    } else {
      sum();
      rest();
    }
  } else if (f1.value == c2.value) {
    mult(m1, m2);
    mult2(m1, m2);
  } else if (f1.value == c1.value && f2.value == c2.value) {
    cuadrada();
  } else if (
    !c1.value.length ||
    !f1.value.length ||
    !c2.value.length ||
    !f2.value.length
  ) {
    num === "introduzca valores!";
  } else {
    alert("NO SE PUEDE REALIZAR NINGUNA OPERACIÓN CON ESOS ORDENES");
  }
}

limpiar.addEventListener("click", () => {
  limpiarTextbox(c1);
  limpiarTextbox(f1);
  limpiarTextbox(c2);
  limpiarTextbox(f2);
  limpiarMat();
});
