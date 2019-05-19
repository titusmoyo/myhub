import React,{Component} from 'react';


export default class Education extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }//end of constructor

  render(){
    const {item}=this.props;

    return(
      <div className="item">
          <h4 className="degree">{item.degree}</h4>
          <h5 className="meta">{item.University}</h5>
          <div className="time">{item.period}</div>
      </div>
    );
  }//end of render()

}///end of class Experience
