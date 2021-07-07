import React, { Component } from 'react';

class ToDoList extends Component {
  render() {
    return (
      <div>
        <div className="Input-Container">
          <div className="add-element">
            <h1>TO-DO APP!</h1>
            <h4>Add New To-Do</h4>
            <input type="text" id="myInput" placeholder="Enter New Task..." />
            <br />
            <button className="add-Btn" onClick={this.addTodo}>
              Add
            </button>
          </div>
        </div>
        <div>
          <h2>Let's get some work done!</h2>

          <ul
            id="myUL"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <li>
              <p>todo text</p>
            </li>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '60px',
              }}
            >
              <buton className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 172 172"
                  style={{ fill: '#7c7c7c' }}
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: 'normal' }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#7c7c7c">
                      <path d="M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h114.66667v-14.33333h-35.83333l-7.16667,-7.16667zM35.83333,50.16667v107.5h100.33333v-107.5zM67.43945,71.66667l18.56055,18.56055l18.56055,-18.56055l10.10612,10.10612l-18.56055,18.56055l18.56055,18.56055l-10.10612,10.10612l-18.56055,-18.56055l-18.56055,18.56055l-10.10612,-10.10612l18.56055,-18.56055l-18.56055,-18.56055z"></path>
                    </g>
                  </g>
                </svg>
              </buton>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoList;
