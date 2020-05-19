var checkboxes = document.getElementsByName('interests[]');

function validInterests()
{
    for (i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].checked)
        {
            checkboxes[0].setCustomValidity("");
            return
        }
    }

    checkboxes[0].setCustomValidity("Please select at least one interest item");

}

for (i = 0; i < checkboxes.length; i++)
{
    checkboxes[i].addEventListener('change', validInterests);
}

validInterests();

$(document).ready(function() {

    const $valueSpan = $('.valueSpan2');
    const $value = $('#temper');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
  
      $valueSpan.html($value.val());
    });
  });