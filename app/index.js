import moment from 'moment';
import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';
var template = require('./messages.html');
var logo = require('./images/especializa_logo.jpg');
var Message = function (text) {
    this.text = text;
    this.created = Date.now();
};
/* eslint no-undef: 0 */
var elementBtn = document.getElementById('send');
elementBtn.onclick = function () {
    // Type Assertions 
    var m = new Message(document.getElementById('message').value);
    document.getElementById('messages').innerHTML += template({
        m: m,
        relativeTime: moment(m.created).fromNow(),
    });
};
document.getElementById('logo').src = logo;
if (module && module.hot) {
    module.hot.accept();
}
