/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * tests/api/v1/authenticate/utils.js
 */

const tu = require('../../../testUtils');

const testStartTime = new Date();
const samlParams = {
  samlEntryPoint: 'http://someurl.com',
  samlIssuer: 'passport-saml',
};

module.exports = {
  fakeUserCredentials: {
    email: 'user1@abc.com',
    password: 'fakePasswd',
    username: `${tu.namePrefix}user1`,
  },

  forceDelete(done, startTime=testStartTime) {
    tu.forceDelete(tu.db.User, startTime)
    .then(() => tu.forceDelete(tu.db.Profile, startTime))
    .then(() => tu.forceDelete(tu.db.Token, startTime))
    .then(() => done())
    .catch(done);
  },

  creatSSOConfig() {
    return tu.db.SSOConfig.create(samlParams);
  },

  forceDeleteSSOConfig() {
    return tu.db.SSOConfig.destroy({
      where: {},
      force: true,
    });
  },
};
