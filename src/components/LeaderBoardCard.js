import React, { Component } from 'react'

function UserCard ({ name, answered, created }) {

    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Answered Questions {answered}</p>
                <p className="card-text">Created Questions {created}</p>
            </div>
        </div>
    )
}

function ScoreCard ({ score }) {

    return (
        <div className="card align-self-center" style={{width: '6rem'}}>
            <h6 className="card-header">Score</h6>
            <div className="card-body">
                <span className='dot'>{score}</span>
            </div>
        </div>
    )
  }

function LeaderMedia ({ name, avatar, answered, created }) {

    return (
        <div className="media">
            <img className="align-self-center mr-3" style={{width: '100px', height: '100px'}}
                src={avatar}
                alt="Card image cap"/>
            <div className="media-body">  
                <div className="media">
                    <div className="media-body">
                        <UserCard name={name} answered={answered} created={created} />
                    </div>
                    <ScoreCard score={10} />
                </div>
            </div>
        </div>
    )
}
  
class LeaderBoardCard extends Component {

  render() {

    const { name, avatar, answered, created } = this.props

    return (
        <div className='card' style={{width: '35rem'}}>
            <div className='card-body'>
                <LeaderMedia name={name} avatar={avatar}
                    answered={answered} created={created}/>
            </div>
        </div>
    )
  }
}

export default LeaderBoardCard