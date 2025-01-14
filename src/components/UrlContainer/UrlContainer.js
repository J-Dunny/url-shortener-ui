import React from 'react';
import './UrlContainer.css';

const UrlContainer = (props) => {
  let urlEls;
  if(props.urls){
    urlEls = props.urls.map(url => {
      // console.log("url", url)
      return (
        <div key={url.id} className="url">
          <h3>{url.title}</h3>
          <a  href={url.short_url} target="blank">{url.short_url}</a>
          <p> {url.long_url}</p>
        </div>
      )
    });
  }
  

  return (
    <section>
      { urlEls ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
