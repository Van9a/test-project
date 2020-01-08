import React, { Component } from 'react';
import DataService from '../../services/DataService';
import './styles.scss';

class CharacterDetails extends Component {
    dataService = new DataService();

    state = {
        character: null
    };

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) {
        if (this.props.characterId !== prevProps.characterId) {
            this.updateCharacter();
        }
    }

    updateCharacter() {
        const { characterId } = this.props;

        if (!characterId) {
            return
        }

        this.dataService.getCharacter(characterId)
            .then((character) => {
                this.setState({
                    character
                })
            });
    }

    render() {

        if (!this.state.character) {
            return <div>Please, select character</div>
        }

        const { character } = this.state;
        const { name, status, species, gender, image } = character;

        return (
            <div className="character-details">
                <h3 className="character-details__title">Character info</h3>

                <div className="character-details__container">
                    <img src={image} alt="image" className="character-details__image"/>
                    <div>
                        <div>Character name: {name}</div>
                        <div>Character status: {status}</div>
                        <div>Character species: {species}</div>
                        <div>Character gender: {gender}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterDetails;
