import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import CharacterList from './components/characterList';
import DataService from './services/DataService';
import Template from './components/template';
import CharacterDetails from './components/characterDetails';
import './App.css';

class App extends Component {
    dataService = new DataService();

    state = {
        characterList: null,
        selectedCharacter: null
    };

    componentDidMount() {
        this.dataService.getAllCharacters().then((item) => this.setState({
            characterList: item
        }));
    }

    onItemSelected = (id) => {
        this.setState({
            selectedCharacter: id
        });
    };

    render() {
        const { characterList } = this.state;
        return (
            <div className="app">
                <Router>
                    <Header/>
                    <Route path="/" exact render={() => characterList ?
                        <CharacterList characterList={characterList} onItemSelected={this.onItemSelected}/>
                        : null}
                    />
                    <Route path="/character"
                           render={() => <CharacterDetails characterId={this.state.selectedCharacter}/>}/>
                    <Route path="/template" component={Template}/>
                </Router>
            </div>
        );
    }
}

export default App;
