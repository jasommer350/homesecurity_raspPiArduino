$('#sysOff').click(function() {
        $.ajax({
          type: "PUT",
          url: "ihomesecurity/f"
        })
          .done(function( msg ) {
            $('#systemstatus').html('System is: off');
            console.log( msg );
          });
    });
$('#sysOn').click(function() {
        $.ajax({
          type: "PUT",
          url: "ihomesecurity/n"
        })
          .done(function( msg ) {
            $('#systemstatus').html('System is: on');
            console.log( msg );
          });
    });