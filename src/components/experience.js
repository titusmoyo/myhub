import React,{Component} from 'react';


export default class Experience extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }//end of constructor

  render(){
    const {item}=this.props;

    return(
      <div className="item">
          <div className="meta">
              <div className="upper-row">
                  <h3 className="job-title">{item.title}</h3>
                  <div className="time">{item.period}</div>
              </div>{/*//upper-row*/}
              <div className="company">{item.companyURL}</div>
          </div>{/*//meta*/}
          <div className="details">
              <p>{item.details}</p>
          </div>{/*//details*/}
      </div>
    );
  }//end of render()

}///end of class Experience
