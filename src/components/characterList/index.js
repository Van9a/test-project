import React, { Component } from 'react';
import './styles.scss';

class ListCharacter extends Component {
    render() {
        const { listCharacter } = this.props;
        return (
            <table className="list-hero">
                <tr>
                    {
                        listCharacter.map(({ id, name }) => (
                            <td key={id}>
                                {name}
                            </td>
                        ))
                    }
                    <td></td>
                </tr>
            </table>
        )
    }
}

export default ListCharacter;
