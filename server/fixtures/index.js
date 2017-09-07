#!/bin/env node

require('../services/mongo');

const fixtures = [];

fixtures.forEach(fixture => fixture());
