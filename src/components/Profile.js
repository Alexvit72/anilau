import React from 'react';
import './Profile.css';
import Headline from './Headline';
import ContLink from './ContLink';

function Profile(props) {
  const {fullName, position, contacts} = props.worker;
  const list = [];
  for (let field in contacts) {
    list.push(<ContLink key={field} id={field} contact={contacts[field]} className='ContLink' />);
  }
  return <div className={props.className}>
    <img src={process.env.PUBLIC_URL + '/portraits/port' + (props.index + 1) + '.png'} alt={fullName} />
    <Headline className='Headline' text={fullName} punctuation='' />
    <p>{position}</p>
    <div>
      {list}
    </div>
  </div>;
}

export default Profile;
