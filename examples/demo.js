const mongoose = require('mongoose');
const convert = require('..');


const Schema = mongoose.Schema;

const demoSchema = new Schema({
  idx: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    default: 'your name',
  },
  binary: Buffer,
  living: Boolean,
  object: Object,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65 },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofObject: [{ name: String, sex: Boolean }],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    stuffx: {
      name: {
        type: String,
        required: true,
      },
      sex: Boolean,
      arr: [String],
    },
  },
});

console.log(JSON.stringify(convert(demoSchema)));
