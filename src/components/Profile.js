import React from 'react';
import './Profile.css';
import Headline from './Headline';
import ContLink from './ContLink';
import port1 from '../images/portraits/port1.png';
import port2 from '../images/portraits/port2.png';
import port3 from '../images/portraits/port3.png';
import port4 from '../images/portraits/port4.png';
const portraits = [];
portraits.push(port1, port2, port3, port4);

function Profile(props) {
  const {fullName, position, contacts} = props.worker;
  const list = [];
  for (let field in contacts) {
    list.push(<ContLink key={field} id={field} contact={contacts[field]} className='ContLink' />);
  }
  return <div className={props.className}>
    <img src={portraits[props.index]} alt={fullName} />
    <Headline className='Headline' text={fullName} punctuation='' />
    <p>{position}</p>
    <div>
      {list}
    </div>
  </div>;
}

export default Profile;
