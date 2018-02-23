import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QuestionView from './QuestionView/QuestionView';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AnalyticsView from './AnalyticsView/AnalyticsView';

let classNames = require('classnames');

class App extends Component {

  componentWillMount() {
    this.setState({
      currentView: 'analyticsView',
      tab1Active:true,
      tab2Active:false,
    });

    this.views = {
      questionView: <QuestionView changeView={this.changeView}/>,
      thankYouView: <div></div>,
      analyticsView: <AnalyticsView />
    }
  }

  changeView = (view) => {
    this.setState({currentView:view});
  }

  onMenuClick = (id) => {
    if(id === 0) {
      this.setState({tab1Active:true, tab2Active:false, currentView:'questionView'});
    }
    if(id === 1) {
      this.setState({tab1Active:false, tab2Active:true, currentView:'analyticsView'});
    }
  }
  render() {
    const theme1 = getMuiTheme({
      slider: {
        selectionColor: "#0EDBA7",
        handleSize: 26,
        handleSizeDisabled: 8,
        handleSizeActive: 26,
      }
    })
    let menuClass1 = classNames('tab', {'active': this.state.tab1Active});
    let menuClass2 = classNames('tab', {'active': this.state.tab2Active});
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={theme1}>
          <div>
            <nav className="nav-extended">
             <div className="nav-wrapper">
               <a className="brand-logo">Logo</a>
             </div>
             <div className="nav-content">
               <ul className="tabs tabs-transparent">
                 <li className={menuClass1} onClick={() => this.onMenuClick(0)}>DIN DAG</li>
                 <li className={menuClass2} onClick={() => this.onMenuClick(1)}>ANALYS</li>
               </ul>
             </div>
            </nav>

            {this.views[this.state.currentView]}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
