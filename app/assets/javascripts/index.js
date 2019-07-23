$(function(){

var search_list = $("#user-search-result");
function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" id=add-btn data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`

  search_list.append(html);
}

function appendErrMsgToHTML(msg) {
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${msg}</p>
              </div>`
  search_list.append(html);
}

function appendDeleteBtn(userId, userName){
  var html = `<div class='chat-group-user clearfix js-chat-member' id='${userId}'>
                <input name='group[user_ids][]' type='hidden' value='${userId}'>
                <p class='chat-group-user__name'>${userName}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove id=delete-btn js-remove-btn'>削除</div>
              </div>`
  search_list.append(html);
}
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーは見つかりません");
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    });
  });
    
      $(document).on("click", "#add-btn", function () {
        debugger
        var input =$("user-search-result").val();
          var userId = $(this).data('user-id')
          var userName = $(this).data('user-name')
          appendDeleteBtn(userId, userName)
          $(this).parent().remove();
      $(document).on("click", ".user-seach-remove", function (){
          $(this).parent().remove();
      }); 
    });
  });




