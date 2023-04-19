// 이메일 버튼
$("#email_checkBtn").click(function () {
  $(this).attr("style", "display:none;");
  $("#email_checkDiv").attr("class", "email_on");
});

$(function () {
  $("#email_select").change(function () {
    $("#email2").val($("#email_select").val());
  });
});

//아이디 중복 체크
$("#id").focusout(function () {
  $("#idCheckDiv").empty();
  $("#idCheckDiv").css("color", "black");
  if ($("#id").val() == "") {
    $("#idCheckDiv").text("먼저 아이디를 입력해주세요");
    $("#id").focus();
  } else {
    $.ajax({
      type: "post",
      url: "",
      data: "id=" + $("#id").val(), //서버로 보내는 데이터
      dataType: "text", //서버로 받는 데이터형 ex) text,json,xml
      success: function (data) {
        //중복된 아이디 있으면 exist, 중복된 아이디 없으면 non_exist
        if (data == "exist") {
          $("#idCheckDiv").text("사용 불가능");
          $("#idCheckDiv").css("color", "red");
        } else if (data == "non_exist") {
          $("#idCheckDiv").text("사용 가능");
          $("#idCheckDiv").css("color", "blue");
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
});
