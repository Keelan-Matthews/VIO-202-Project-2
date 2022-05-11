import React from 'react';
import Skyscraper from '../images/skyscraper.svg';

export default function Title() {
  return (
    <section className="d-flex vh-100 align-items-center">
      <img src={Skyscraper} className="title" alt="" />
    </section>
  )
}
