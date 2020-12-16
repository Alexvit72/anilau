import React from 'react';
import Poster from './Poster';

function BoxOfPosters(props) {

  const list = props.works.map( (work, index) => {
    return <a href={work.href}>
      <Poster className='Poster'
        key={index}
        imgSrc={process.env.PUBLIC_URL + work.imgSrc}
        caption={work.caption}
      />
    </a>;
  });

  return <div className={props.className}>
    {list}
  </div>
}

export default BoxOfPosters;
