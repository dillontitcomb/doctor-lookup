import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { doctorLookup } from './doctor.js';

$(document).ready(function() {
  let newDocSearch = new doctorLookup();
  $('#illnessSearch').click(function() {
    let selectedIllness = $("#illness").val();
    newDocSearch.searchByIllness(selectedIllness);
  });
});
