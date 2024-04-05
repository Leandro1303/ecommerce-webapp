import { MONGODBURL } from '../config.js';

import mongoose from 'mongoose';

const url = MONGODBURL;

mongoose.connect(url)