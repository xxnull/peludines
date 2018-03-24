import _ from 'lodash';
import $ from 'jquery';

require('bootstrap-loader');
//import './styles/custom.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


(function ($) {
  var MQ = MathQuill.getInterface(2);
  var bool = false;
  var count = 0;
  var pg_count = 0;
  var flag_rev = false;
  var nex_cunt = 0;

  // View preload and config.
  var baseview = new BaseView(data);

  // View instance for exploration.
  $(document).ready(function(){
    Ready(ActivityModel);
  });
}($))