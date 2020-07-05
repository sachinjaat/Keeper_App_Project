const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./components/App");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.use(jsxCompile(path.join(__dirname, 'components'), {
    dest: path.join(__dirname, 'compiled-js')
}));

// make static middleware aware of your destination directory
app.use(express.static(path.join(__dirname, 'compiled-js')));
app.use(express.static(path.join(__dirname, 'components')));

app.set('components', __dirname + '/components');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


mongoose.connect("mongodb://Localhost:27017//keeperDB", { useNewUrlParser: true});

const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model("Notes", noteSchema);

const note = new Note({
  title: "This is the title",
  content: "This is the content"
});

note.save();


ReactDOM.render(<App />, document.getElementById("root"));
