import React from 'react';
import Rater from './RaterComponent.jsx';

class Product extends React.Component{
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }
  render() {
    return (<div className={"thumbnail"}>
      <img src="Images/Laptop.jpg" class="img img-rounded img-responsive" />
      <div class="caption" style="text-align:center">
        <a href="/productDetails"> <h3> Gamia Laptop </h3></a>
        <h4><span style="color:red">Rs. 33000</span></h4>
        <p>An excellent choice for an awesome gaming experience.</p>
        <Rater />
        <span style="fontSize:9px">3/5</span>
      </div>
    </div>
    );
  }
}
export default Product;



  