/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-unused-vars */

/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

let number = 0;
function render() {
  const showCurrentNumber = () => {
    return number;
  };
  const setCurrentNumber = (value) => {
    if (number !== 0) {
      number += String(value);
    } else {
      number = value;
    }
    render();
  };
  const element = (
    <div>
      <p>간단 계산기</p>
      <h1 id="result">{number}</h1>
      <div>
        <button type="button" onClick={() => setCurrentNumber(1)}>
          1
        </button>
        <button type="button" onClick={() => setCurrentNumber(2)}>
          2
        </button>
        <button type="button" onClick={() => setCurrentNumber(3)}>
          3
        </button>
        <button type="button" onClick={() => setCurrentNumber(4)}>
          4
        </button>
        <button type="button" onClick={() => setCurrentNumber(5)}>
          5
        </button>
        <button type="button" onClick={() => setCurrentNumber(6)}>
          6
        </button>
        <button type="button" onClick={() => setCurrentNumber(7)}>
          7
        </button>
        <button type="button" onClick={() => setCurrentNumber(8)}>
          8
        </button>
        <button type="button" onClick={() => setCurrentNumber(9)}>
          9
        </button>
        <button type="button" onClick={() => setCurrentNumber(0)}>
          0
        </button>
      </div>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
