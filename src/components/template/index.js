import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import './styles.scss';

const BorderLinearProgress = withStyles({
    root: {
        height: 13,
        backgroundColor: '#fff',
        border: '1px solid #9ecbe8',
    },
    bar: {
        backgroundColor: '#9ecbe8',
    },
})(LinearProgress);

class Template extends Component {
    state = {
        progress: null
    };

    componentDidMount() {
        this.setState({
            progress: this.getProgressValue()
        });
    }

    getProgressValue() {
        return Math.floor(Math.random() * 101);
    }

    render() {
        const { progress } = this.state;

        return (
            <div className="training">
                <div className="training__container">
                    <div className="training__count">
                        25
                    </div>
                    <p className="training__title">
                        Обучение по продажам
                    </p>
                    <div className="training__sales"><p >Вы сделали 13 продаж и заработали:</p>$ 2000</div>
                    <div className="training-plan">
                        <h3>Месячный план выполнен на</h3>
                        {progress ?
                            <BorderLinearProgress
                                className="training-plan__progress"
                                variant="determinate"
                                color="secondary"
                                value={progress}
                                valueBuffer={progress}
                            /> : null
                        }
                        <div className="training-plan__container">
                            <button className="training-plan__button">Продолжить</button>
                            <p>Осталось 8 дней</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Template;
