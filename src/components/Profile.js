import React from 'react';
import Headline from './Headline';
import ContLink from './ContLink';

function Profile(props) {
  const {imgSrc, fullName, position, contacts} = props.worker;
  const list = contacts.map( (contact, index) => {
    return <ContLink key={index} contact={contact} className='ContLink' />
  });
  return <div className={props.className}>
    <img src={imgSrc} alt={fullName} />
    <Headline className='Headline' text={fullName} punctuation='' />
    <p>{position}</p>
    <div>
      {list}
    </div>
  </div>;
}

export default Profile;
