import React, { Component } from 'react'
import { connect } from 'react-redux'

function UserCard ({ name, answered, created }) {

    return (
        <div className="card" style={{width: '16rem'}}>
            <div className="card-body">
                <h5 className="card-title" style={{fontWeight: 'bold'}}>{name}</h5>
                <div>
                    <span className='font-weight-normal' style={{fontSize: 15}}> 
                        Answered Questions
                    </span>
                    <span className='float-right pr-2 font-weight-normal' style={{fontSize: 15}}>
                        {answered}
                    </span>
                </div>
                <div>
                    <span className='font-weight-normal' style={{fontSize: 15}}> 
                        Created Questions
                    </span>
                    <span className='float-right pr-2 font-weight-normal' style={{fontSize: 15}}>
                        {created}
                    </span>
                </div>
            </div>
        </div>
    )
}

function ScoreCard ({ score }) {

    return (
        <div className="card align-self-center" style={{width: '5rem'}}>
            <h6 className="card-header" style={{fontSize: 14}}>Score</h6>
            <div className="card-body">
                <button className='dot' style={{fontSize: 16}}>{score}</button>
            </div>
        </div>
    )
  }

function LeaderMedia ({ name, avatar, answered, created }) {

    return (

        <div className="media">
            <img className="align-self-center mr-3" style={{width: '100px', height: '100px'}}
                src={avatar}
                alt="User avatar"/>
            <div className="media-body">  
                <div className="media">
                    <div className="media-body">
                        <UserCard name={name} answered={answered} created={created} />
                    </div>
                    <ScoreCard score={answered + created} />
                </div>
            </div>
        </div>
    )
}
  
class LeaderBoardCard extends Component {

  render() {

    const { user } = this.props

    return (
        <div className='card' style={{width: '32rem'}}>
            <div className='card-body'>
                <LeaderMedia
                    name={user.name}
                    avatar={user.avatarURL}
                    answered={Object.keys(user.answers).length} 
                    created={user.questions.length}/>
            </div>
        </div>
    )
  }
}

function mapStateToProps ({ users }, { id }) {

    return {
      user: users[id]
    }
  }

export default connect(mapStateToProps)(LeaderBoardCard)