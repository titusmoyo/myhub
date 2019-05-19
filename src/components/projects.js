import React,{Component} from 'react';


export default class Projects extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }//end of constructor

  render(){
    const {item}=this.props;

    return(
      <div className="item">
          <span className="project-title"><a href={item.url} target="_blank">{item.name}</a></span> -
          <span className="project-tagline">{item.detail}</span>
      </div>
    );
  }//end of render()

}///end of class Experience
