$(document).ready(function() {
    $.ajax({
      url: 'https://api.exchangerate-api.com/v4/latest/USD',
      dataType: 'json',
      success: function(data) {
        var rates = data.rates;

        var currencies = ['USD', 'ARS', 'EUR'];

        $.each(currencies, function(index, currency) {
          var rate = rates[currency];
          var row = '<tr><td>' + currency + '</td><td>' + rate + '</td></tr>';
          $('#exchange-rates tbody').append(row);
        });
      }
    });
  });