import React, { Component } from 'react'
import LeaderBoardCard from './LeaderBoardCard'

class LeaderBoard extends Component {

  render() {

    return (
        <div className='mb-3'>
             <div className='mb-3'>
                <LeaderBoardCard key={1} name={'Soumya'} avatar={'https://icon-library.net/images/icon-avatar/icon-avatar-6.jpg'}
                    answered={25} created={12}/>
            </div>
            <div className='mb-3'>
                <LeaderBoardCard key={2} name={'Ranjan'} avatar={'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'}
                    answered={10} created={7}/>
            </div>
            <div className='mb-3'>
                <LeaderBoardCard key={3} name={'Bhuyan'} avatar={'https://icon-library.net/images/avatar-icon-free/avatar-icon-free-10.jpg'}
                    answered={3} created={1}/>
            </div>
        </div>
    )
  }
}

export default LeaderBoard