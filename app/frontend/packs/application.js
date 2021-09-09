// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@fortawesome/fontawesome-free/css/all'
global.toastr = require('toastr')

// DATATABLE
require('datatables.net-bs5')

// SELECT2
import 'select2'
import 'select2/dist/css/select2.css'

//BOOTSTRAP
// import 'bootstrap/js/src/alert'  
// import 'bootstrap/js/src/button'  
// import 'bootstrap/js/src/carousel'  
import 'bootstrap/js/src/collapse'  
import 'bootstrap/js/src/dropdown'  
// import 'bootstrap/js/src/modal'  
// import 'bootstrap/js/src/popover'  
import 'bootstrap/js/src/scrollspy'  
// import 'bootstrap/js/src/tab'  
// import 'bootstrap/js/src/toast'  
// import 'bootstrap/js/src/tooltip'

// FULLCALLENDAR
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';
import esLocale from '@fullcalendar/core/locales/es';

window.Calendar = Calendar;
window.dayGridPlugin = dayGridPlugin;
window.timeGridPlugin = timeGridPlugin;
window.listPlugin = listPlugin;
window.momentPlugin = momentPlugin;
window.esLocale = esLocale;

//FLATPICKR
require('flatpickr')
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es.js'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$.fn.extend({
  integrateSelect2: function(selector) {
    selector = selector || '.select2';
    return $(this).find(selector).select2({
      theme: 'bootstrap',
      width: '100%',
      allowClear: false
    });
  },
  integrateFlatpickr: function(selector) {
    selector = selector || '.flatpickr';
    return $(this).find(selector).flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      altInput: true,
      altFormat: 'j F, Y - H:i',
      'locale': Spanish
    });
  }
});


$(document).on('turbolinks:load', function() {
  var datatable, form;
  datatable = $('.datatable');
  datatable.DataTable({
    'dom': 'Bfrtip',
    'language': {
      'url': '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json'
    },
    'bPaginate': true,
    'info': false,
    'responsive': true,
    'deferRender': true,
    'stateSave': true,
    'bDestroy': true,
  });

  form = $('form');
  form.integrateSelect2();
  form.integrateFlatpickr();

});

$(document).on('turbolinks:before-cache', function() {
  var dataTable;
  dataTable = $($.fn.dataTable.tables(true)).DataTable();
  if (dataTable !== null) {
    return dataTable.destroy();
  }
});

toastr.options = {
  'closeButton': false,
  'debug': false,
  'newestOnTop': false,
  'progressBar': false,
  'positionClass': 'toast-top-right',
  'preventDuplicates': true,
  'preventOpenDuplicates': true,
  'onclick': null,
  'showDuration': '0',
  'hideDuration': '0',
  'timeOut': '0',
  'extendedTimeOut': '0',
  'tapToDismiss': true,
  'showEasing': 'swing',
  'hideEasing': 'linear',
  'showMethod': 'fadeIn',
  'hideMethod': 'fadeOut'
}
