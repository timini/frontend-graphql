import React from 'react';
import PropTypes from 'prop-types';
import { uniq } from 'lodash';
import { not, isNil } from 'ramda';

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

const Filter = ({ name, dispatch, allRewards = [] }) => {
  const range = uniq(allRewards.map(reward => reward[name])).sort((a, b) => a - b)
  return (<div>
    <h5>By {name}:</h5>
    <h6>less than</h6>
    <ul>
      {range.map(point => (<li
          type="checkbox"
          key={point}
          onClick={
            () => dispatch({
              type: 'SET_FILTER',
              payload: {
                filterName: `${name}_lte`,
                value: point,
              }
            })
          }
        >
          {point}
        </li>)
      )}
    </ul>
    <h6>greater than</h6>
    <ul>
      {range.map(point => (<li
          type="checkbox"
          key={point}
          onClick={
            () => dispatch({
              type: 'SET_FILTER',
              payload: {
                filterName: `${name}_gte`,
                value: point,
              }
            })
          }
        >
          {point}
        </li>)
      )}
    </ul>
  </div>);
};

const Rewards = (props) => {
  const {
    allRewards = [],
    dispatch,
    filters: {
      page,
      campaign_id,
      ...allowedFilters
    } = {}
  } = props;
  return (<div>
    <h1>Rewards</h1>
    <div>
      <h4>filters</h4>
      <div>
        <h5>active: (click to remove)</h5>
        {Object.entries(allowedFilters).map(entry => {
          const [ key, val ] = entry;
          if (not(isNil(val))) {
            return <div key={key}
              onClick={
                () => dispatch({
                  type: 'SET_FILTER',
                  payload: {
                    filterName: key,
                    value: undefined,
                  }
                }
              )
            }>{key}: {val} <span>x</span></div>
          }
          return null;
        })}
      </div>
      <Filter name="points" {...props} />
      <Filter name="quantity" {...props} />
      <Filter name="capPerAmbassador" {...props} />
    </div>
    <div>
      {allRewards.map(reward => <Reward {...reward}/>)}
    </div>
  </div>);
};

Rewards.propTypes = {};

export default Rewards;
