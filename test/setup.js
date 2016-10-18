import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// Expose globally a doc and window object, to be used during tests
global.document = doc;
global.window = win;

// Expose all properties from the window object globally, so tests can use them
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// Give global access in test to React and expect, so we don't always have to
// import them
global.React = React;
global.expect = expect;