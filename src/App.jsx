import images from "./logo.png"
import img from "./images1.png";

export default function App() {
  return (
    <div className="App col-12 bg-dark">
      <div className="header-1">
        <img src={images} alt="logo" />
        <div className="d-flex gap-4 head">
          <p><i class="fa-brands fa-dribbble"></i> Public</p>
          <buttom>Run in postman</buttom>

        </div>

      </div>
      <div className="header">
        <ul>
          <li>
            <a href="">ENVIRONMENT</a>
          </li>
          <li>
            <a href="" style={{ color: "rgb(255, 81, 0)" }}>No Environment <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <li>
            <a href="">LAYOUT</a>
          </li>
          <li>
            <a href="" style={{ color: "rgb(255, 81, 0)" }}>Single Colume <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <li>
            <a href="" style={{ color: "rgb(255, 81, 0)" }}>cURL-cURL<i class="fa-solid fa-chevron-down"></i></a>
          </li>

          <a href="" ><i class="fa-sharp fa-solid fa-gear"></i></a>

        </ul>

      </div>
      <div className="text-cente">
        <h3 className="text-white pt-5 ">Task-Management Live</h3>
        <p>Tasks App APIs Documentation</p>
        <p> Modules included:</p>
        <ul>
          <li>User Auth Module</li>
          <li>User Module</li>
          <li>Department Module</li>
          <li>Tasks Module</li>
        </ul>


      </div>
      <div className="line">

      </div>
      <div className="text-right">
        <h2>Auth Module</h2>
        <h5>User Authentication Module</h5>
        <p>include :</p>
        <p>Login</p>
        <p>Logout</p>
      </div>
      <div className="line">

      </div>

      <div className="three-row">
        <h1>  <span>POST  </span>Login</h1>
        <h4>https://tasksapp.integration25.com/api/auth/login  <i class="fa-regular fa-copy" title="copy"></i></h4>

        <p>User login</p>
        <ul>
          <li>Method : POST</li>
          <li>Form Body :</li>
        </ul>
        <p>- email: required , must be valid email.</p>
        <p>- password : required</p>
        <h6>HEADERS</h6>
      </div>
      <div className="line">

      </div>
      <div className="list-left">
        <h6>Task-Management Live</h6>
        <a href="" className=" pt-2 pb-2">Introduction</a>
        <p ><img src={img} alt="" /><i class="fa-regular fa-folder"></i> Auth Module</p>
        <p><img src={img} alt="" /><i class="fa-regular fa-folder"></i> Department Module</p>
        <p><img src={img} alt="" /> <i class="fa-regular fa-folder"></i>User Module</p>
        <p><img src={img} alt="" /><i class="fa-regular fa-folder"></i> Task Module</p>
      </div>
    </div>
  )
}
<i class="fa-solid fa-chevron-right"></i>