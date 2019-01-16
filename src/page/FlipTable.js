import React, {Component} from 'react';
import './FlipTableCSS.css';

export class FlipTable extends Component {
    render() {
        return (
<div className="b" style={this.props.style}>(<span className="b-arm">╯</span>°□°）<span className="b-arm">╯</span> <span className="b-table">┻━┻</span> <span className="b-table">┻━┻</span> <span className="b-table">┻━┻</span> <span className="b-table">┻━┻</span>
</div>);
    }
}
