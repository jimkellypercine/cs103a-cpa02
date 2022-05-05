'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;


var AnimeSchema = Schema( {
    studio: String,
    genres: [String],
    hype: Number,
    description: String,
    title: Mixed,
    start_date: Mixed,
 } );
 

module.exports = mongoose.model( 'Animedata', AnimeSchema );
