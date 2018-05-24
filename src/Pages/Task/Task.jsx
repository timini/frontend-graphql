import React from 'react';
import PropTypes from 'prop-types';

const Reward = ({ id, name, image, description, points, quantity, capPerAmbassador }) => (
  <div key={id}>
    <h2>{name}</h2>
    <img src={image}></img>
    <p>{description}</p>
    <div>
      <div>{points} points</div>
      <div>{capPerAmbassador} per ambassador</div>
      <div>{quantity} left to claim</div>
    </div>
  </div>
)

const Rewards = (props) => {
  return (<div>
    <h1>Rewards</h1>
    <div>
      {props.allRewards.map(reward => <Reward {...reward}/>)}
    </div>
  </div>);
};

Rewards.propTypes = {};

export default Rewards;
