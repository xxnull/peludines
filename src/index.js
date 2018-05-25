import _ from 'lodash';
require('bootstrap-loader');
import data from './assets/data/data';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';
import catalogo from './assets/scripts/catalogo';

(function () {
    var x = catalogo(data);
}())