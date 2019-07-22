$(function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message">
                <div class="upper-message">
                <div class="upper-message__user-name">
                ${message.user_name}
                </div>
                <div class="upper-message__date">
                ${message.date}
                </div>
                </div>
                <div class="lower-message">
                <p class="lower-message__content">
                ${message.content}
                </p>
                
                </div>
                </div>`
  return html;
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();    
    var formdata = new FormData(this);
    var url = $(this).attr('action');
    console.log(url)
    console.log(formdata)

    $.ajax({
      url: url,
      type: 'POST',
      data:  formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val(''); 
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    function scrollBottom(){
      var target = $('.message').last();
      var position = target.offset().top + $('.messages').scrollTop();
      $('.messages').animate({
        scrollTop: position
      }, 300, 'swing');
    }
  })
});