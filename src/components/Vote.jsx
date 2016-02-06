import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Vote extends Component {
  constructor(props) {
    super(props)
  }
  getPair() {
    return this.props.pair || []
  }
  isDisabled () {
    console.log(this.props.hasVoted)
    return !!this.props.hasVoted
  }
  hasVotedFor (entry) {
    return this.props.hasVoted === entry
  }
  render() {
    return(
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
            <div className="label">Voted</div>: null}
          </button>
        )}
      </div>
    )
  }
}

reactMixin(Vote.prototype, PureRenderMixin)

export default Vote
