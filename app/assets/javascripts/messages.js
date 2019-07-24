$(document).on('turbolinks:load',function(){
$(function(){
  function buildHTML(message) {
    var upper_html = `<div class="message" data-message-id=${message.id}>
                      <div class="upper-message">
                        <div class="upper-message__user-name">
                          ${message.user_name}
                        </div>
                        <div class="upper-message__date">
                          ${message.created_at}
                        </div>
                      </div>`
    if (message.content && message.image.url) {
      var html = `${upper_html}
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <img src=${message.image.url} class="lower-message__image" >
                  </div>
                </div>`
    } else if (message.content) {
      var html = `${upper_html}
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                  </div>
                </div>`
    } else if (message.image.url) {
      var html = `${upper_html}
                  <div class="lower-message">
                    <img src=${message.image.url} class="lower-message__image" >
                  </div>
                </div>`
    };
    return html;
  };

  $('#new_message').on('submit',function(e){
    e.preventDefault();    
    var formdata = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data:  formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html); 
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
    })

    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
      $('.form__submit').prop('disabled', false);
    })
  })

    var reloadMessages = function() {
      var last_message_id = $('.message:last').data("message-id")
      $.ajax({
        url: `api/messages`,
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages){
        messages.forEach(function(messages){
          var html = buildHTML(messages);
          $('.messages').append(html);
          $('form')[0].reset();
          $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
        })
      })
      .fail(function(){
      });
    };
    setInterval(reloadMessages, 5000); 
});
})