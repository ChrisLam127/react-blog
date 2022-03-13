import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddBtn'>Create</button>
        </Link>
      </div>
      <div className='prductTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://images.pexels.com/photos/3263256/pexels-photo-3263256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Sales:</span>
              <span className='productInfoValue'>4123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Active:</span>
              <span className='productInfoValue'>Yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='prductBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Apple Airpods' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://images.pexels.com/photos/3263256/pexels-photo-3263256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt=''
                className='productUploadImg'
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div>
            <button className='productBtn'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
