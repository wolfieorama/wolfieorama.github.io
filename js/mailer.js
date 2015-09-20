jQuery(function($)
{
    $("#contact_form").submit(function()
    {
      var email = $("#email").val();//get email field value
      var name = $("#name").val();//get name field value
      var msg = $("#msg").val();//get msg field value
      $.ajax(
      {
          type: "POST",
          url: "https://mandrillapp.com/api/1.0/messages/send.json",
          data: {
            'key': '',
            'message': {
              'from_email':email,
              'from_name':name,
              'headers':{
                'Reply-To':email
              },
              'subject': 'Website Contact from submission'
              'text': msg,
              'to': [
                {
                  'email': 'wachirawamunyi@gmail.com',
                  'name': 'John Munyi',
                  'type': 'to'
                }]
            }
          }
      })
      .done(function(response) {
        alert('Your message has been sent. Thank you! I will get back asap');//show success message
        $("#name").val('')//reset field after successful submission
        $("#email").val('')//resre field after successfil submission
        $("#msg").val('')//same as above
      })
      .fail(function(response){
        alert('Error sending message.');
      });
      return false;//prevent page from refreshing
    });
});
