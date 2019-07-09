$(document).ready(function() {
  $("#rating").select2({
    minimumResultsForSearch: -1,
    templateResult: formatOptions
  });
});

function formatOptions(state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $('<span ><img style="display: inline-block; height:20px; width:20px;" src="http://localhost:8080/assets/images/star_filled.png" /> ' + state.text + ' </span>');
  return $state;
}