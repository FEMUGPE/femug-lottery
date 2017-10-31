'use strict';

/**
 * Get a random item from object
 * @module lottery
 * @param {json} json - json for random
 */

const lottery = (json) => {

  const list = JSON.parse(json);
  const randomIndex = Math.floor(Math.random() * list.people.length);

  return list.people[randomIndex];

};

module.exports = lottery;
