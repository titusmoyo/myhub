import React,{Component} from 'react';


export default class Language extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }//end of constructor

  render(){
    const {item}=this.props;

    return(
      <li>{item.name} <span className="lang-desc">{(item.details)}</span></li>
    );
  }//end of render()

}///end of class Experience
