import React, { Component } from 'react';
import classes from './BusinessForm.module.css';
import Button from "../../../components/Button/Button";
import { connect } from 'react-redux';

class BusinessForm extends Component {

  state = {
    title: '',
    goalHours: '',
    weeklyGoal: {
      hours: '',
      minutes: ''
    },
    daylyGoal: {
      hours: '',
      minutes: ''
    }
  }

  titleHandler = (e) => {
    this.setState({title: e.target.value})
  }

  hoursHandler = (e, typeOfGoal) =>{

    if(typeOfGoal=='goalHours'){
        this.setState({goalHours: e.target.value})
    }
    else if(typeOfGoal=='weeklyGoalHours'){
        let newWeeklyGoal = {...this.state.weeklyGoal};
        newWeeklyGoal.hours = e.target.value;
        this.setState({weeklyGoal: newWeeklyGoal})
    }
    else if(typeOfGoal=='weeklyGoalMinutes'){
        let newWeeklyGoal = {...this.state.weeklyGoal};
        newWeeklyGoal.minutes = e.target.value;
        this.setState({weeklyGoal: newWeeklyGoal})
    }
    else if(typeOfGoal=='daylyGoalHours'){
        let newdaylyGoal = {...this.state.daylyGoal};
        newdaylyGoal.hours = e.target.value;
        this.setState({daylyGoal: newdaylyGoal})
    }
    else if(typeOfGoal=='daylyGoalMinutes'){
        let newdaylyGoal = {...this.state.daylyGoal};
        newdaylyGoal.minutes = e.target.value;
        this.setState({daylyGoal: newdaylyGoal})
    }  }

  addBusiness = () => {
    let data = {
      id: this.props.business.length,
      title: this.state.title,
      hours: 0,
      goalHours: this.state.goalHours,
      weeklyGoal: {
        hours: this.state.weeklyGoal.hours,
        minutes: this.state.weeklyGoal.minutes
      },
      daylyGoal: {
        hours: this.state.daylyGoal.hours,
        minutes: this.state.daylyGoal.minutes
      },
      totalHours: {
            hours: 0,
            minutes: 0
          },
      description: '',
      progress: 0,
      stopWatchIsShown: true,
      countDownIsShown: false,
      currentStopwatchTime: {
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      currentCountdownTime: {
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      timerTime: 0,
      timerTimeCountDown: 0,
      currentMiniStopwatchTime: {
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      miniTimerTime: 0
    }
    this.props.addBusiness(data);
    console.log(data);
    this.setState({title: '', goalHours: ''});
    this.closeForm();
}

  closeForm = () => {
    document.getElementById('formCover').style.display='none';
    this.props.hideBusinessForm();
  }


  render(){
    return(
      <div>
        <div className={classes.formWrapper}>
          <h1 className={classes.formTitle}>Add a new bussines</h1>
          <p className={classes.formDescr}>Here will be description. Bfds fds sfd sdf sdf. Skldpqopr rosaks a sk.</p>
          <span className={classes.label}>Title*:</span><br/>
          <input onChange={(e)=>this.titleHandler(e)} type="text" placeholder="Pogramming, Reading, Learn a new language..." value={this.state.title}/><br/>
          <span className={classes.label}>Goal*:</span><br/>
          <input className={classes.inputGoal} onChange={(e)=>this.hoursHandler(e, 'goalHours')} type="number" placeholder="1000" value={this.state.goalHours}/> HOURS<br/>
          <span className={classes.label}>Weekly goal:</span><br/>
          <input className={classes.inputGoal} onChange={(e)=>this.hoursHandler(e, 'weeklyGoalHours')} type="number" placeholder="14"/> HOURS
          <input className={classes.inputGoal} onChange={(e)=>this.hoursHandler(e, 'weeklyGoalMinutes')} type="number" placeholder="0"/> MINUTES<br/>
          <span className={classes.label}>Dayly goal:</span><br/>
          <input className={classes.inputGoal} onChange={(e)=>this.hoursHandler(e, 'daylyGoalHours')} type="number" placeholder="2"/> HOURS
          <input className={classes.inputGoal} onChange={(e)=>this.hoursHandler(e, 'daylyGoalMinutes')} type="number" placeholder="0"/> MINUTES<br/>
          <div className={classes.btnWrapper}>
          <button className={classes.addBusinessBtn} onClick={this.addBusiness}>Add</button>
          </div>       
        </div>
        <div 
          id='formCover'
          className={classes.formCover}
          onClick={this.closeForm}>
        </div>
      </div>
      )
  }

}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

export default connect(mapStateToProps)(BusinessForm);