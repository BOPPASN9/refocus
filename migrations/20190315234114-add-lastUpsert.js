/**
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn(
      'Generators',
      'lastUpsert',
      {
        type: Sequelize.DATE,
        allowNull: true,
      }
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn(
      'Generators',
      'lastUpsert'
    ),
};

