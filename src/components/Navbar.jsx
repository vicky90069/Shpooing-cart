import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between">

        <NavLink to="/">
          <div>
            <img src="" alt="" />
          </div>
        </NavLink>


        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>


          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>

        </div>

      </div>
    </nav>
  )
};

export default Navbar;
