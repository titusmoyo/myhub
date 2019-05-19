import React,{Component} from 'react';
import './App.css';

import resume from './resume.json';
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import Skill from './components/skill.js';
import Education from './components/education.js';
import Language from './components/language.js';

console.log('Resume here');
console.log(resume);

class App extends Component{

  constructor(props){
    super(props);

  }//end of constructor()

  renderExperiences=()=>{
    // <Experience item={item} key={i}/>
    return(
      resume.experiences.map((item,i)=>{
        return(
          <Experience item={item} key={i}/>
        );
      })
    );
  }///end of renderExperiences

  renderProjects=()=>{
    // <Experience item={item} key={i}/>
    return(
      resume.projects.map((item,i)=>{
        console.log("apaaa",item);
        return(
          <Projects item={item} key={i}/>
        );
      })
    );
  }///end of renderExperiences

  renderSkill=()=>{
    // <Experience item={item} key={i}/>
    return(
      resume.skills.map((item,i)=>{
        return(
          <Skill item={item} key={i}/>
        );
      })
    );
  }///end of renderExperiences

  renderEducation=()=>{
    // <Experience item={item} key={i}/>
    return(
      resume.education.map((item,i)=>{
        return(
          <Education item={item} key={i}/>
        );
      })
    );
  }///end of renderExperiences


    renderLanguage=()=>{
      // <Experience item={item} key={i}/>
      return(
        resume.languages.map((item,i)=>{
          return(
            <Language item={item} key={i}/>
          );
        })
      );
    }///end of renderExperiences

    renderInterest=()=>{
      return(
        resume.interests.map((item,i)=>{
          return(
            <li key={i}>{item}</li>
          );
        })
      );
    }///end of renderInterest

  render(){
    return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile" src={resume.image} alt="" />
                  <h1 className="name">{resume.name}</h1>
                  <h3 className="tagline">Full Stack Developer</h3>
              </div>{/*//profile-container*/}

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                      <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                      <li className="website"><i className="fas fa-globe"></i><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">{resume.website}</a></li>
                      <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
                      <li className="github"><i className="fab fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
                      <li className="twitter"><i className="fab fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
                  </ul>
              </div>{/*//contact-container*/}
              <div className="education-container container-block">
                  <h2 className="container-block-title">Education</h2>
                  {/*render Education*/}
                  {this.renderEducation()}
                  {/*ende of education*/}
              </div>{/*//education-container*/}

              <div className="languages-container container-block">
                  <h2 className="container-block-title">Languages</h2>

                  <ul className="list-unstyled interests-list">
                  {/*renderlanguages*/}
                  {this.renderLanguage()}
                  {/*renderLanguages*/}
                  </ul>
              </div>{/*//interests*/}

              <div className="interests-container container-block">
                  <h2 className="container-block-title">Interests</h2>
                  <ul className="list-unstyled interests-list">
                      {/*renderInterests*/}
                      {this.renderInterest()}
                      {/*renderInterests*/}
                  </ul>
              </div>{/*//interests*/}

          </div>{/*//sidebar-wrapper*/}

          <div className="main-wrapper">

              <section className="section summary-section">
                  <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                  <div className="summary">
                      <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                  </div>{/*//summary*/}
              </section>{/*//section*/}

              <section className="section experiences-section">
                  <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
                  {/*Experiences classsss*/}
                  {this.renderExperiences()}
                  {/*End of expreriences*/}
              </section>{/*//section*/}

              <section className="section projects-section">
                  <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                  <div className="intro">
                      <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                  </div>{/*//intro*/}

                  {/*renderProjects*/}
                  {this.renderProjects()}
                  {/*renderProjects*/}
              </section>{/*//section*/}

              <section className="skills-section section">
                  <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                  <div className="skillset">

                  {/*renderSkill*/}
                  {this.renderSkill()}
                  {/*renderSkill*/}
                  </div>
              </section>

          </div>{/*//main-body*/}
      </div>
    );
  }//end of render()

}///end of App

export default App;
