import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    name: 'N. Gin',
                    id: 'n-gin'
                },
                {
                    name: 'Louise',
                    id: 'louise'
                },
                {
                    name: 'Nitrus Brio',
                    id: 'nitrus-brio'
                },
                {
                    name: 'Nefarious Tropy',
                    id: 'nefarious-tropy'
                },
                {
                    name: 'Nefarious Tropy (female)',
                    id:  'nefarious-tropy-f'
                },
                {
                    name: 'Neo Cortex',
                    id:  'neo-cortex'
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {
                        this.state.monsters.map((monster) => {
                            return <h1 key={ monster.key }> { monster.name } </h1>
                        })
                    }
                    <button onClick={() => this.setState({firstName: 'JiYuuki' })}>Click to change the name</button>
                </header>
            </div>
        )
    }
}
export default App;
