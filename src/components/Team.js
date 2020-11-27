import React from 'react';
import Profile from './Profile';

function Team(props) {
  const workers = props.workers.map( (worker, index) => {
    return <Profile className='Profile'
      key={index}
      worker={worker}
    />;
  });
  return <div className={props.className}>
    <Headline className='Headline' text='Our team' punctuation='.' />
    <div>
      {workers}
    </div>
  </div>;
}

export default Team;
