import React from 'react';
import Profile from './Profile';
import Headline from './Headline';

function Team(props) {
  const workers = props.workers.map( (worker, index) => {
    return <Profile className='Profile'
      key={index}
      index={index}
      worker={worker}
    />;
  });
  return <div id={props.id} className={props.className}>
    <Headline className='Headline' text='Our team' punctuation='.' />
    <div>
      {workers}
    </div>
  </div>;
}

export default Team;
