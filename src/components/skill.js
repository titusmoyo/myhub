import React,{Component} from 'react';


export default class Skill extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }//end of constructor

  render(){
    const {item}=this.props;

    return(
      <div className="item">
          <h3 className="level-title">{item.name}</h3>
          <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width:item.percent}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                </div>
          </div>
      </div>
    );
  }//end of render()

}///end of class Experience
