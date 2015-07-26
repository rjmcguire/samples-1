/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* jshint node: true */
/* globals require */

'use strict';

// Add all test files here with a short comment.

// Tests basic functionality of the the gum demo.
require('../src/content/getusermedia/gum/js/test');

// Tests basic functionality of the pc1 demo.
require('../src/content/peerconnection/pc1/js/test');

// Tests basic functionality of the munge-sdp demo.
require('../src/content/peerconnection/munge-sdp/js/test');

// Tests basic functionality of the trickle-ice demo.
require('../src/content/peerconnection/trickle-ice/js/test');

// Tests basic functionality of the datachannel textchat demo.
require('../src/content/datachannel/basic/js/test');

// Tests basic functionality of the input-output device demo.
require('../src/content/devices/input-output/js/test.js');
