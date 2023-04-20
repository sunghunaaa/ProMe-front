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

// 이름 빈칸 (영어 있는지 확인)
$("#name").focusout(function () {
  $("#nameDiv").empty();
  if ($("#name").val() == "") {
    $("#nameDiv").text("먼저 이름을 입력해주세요.");
    $("#name").focus();
  }
});

//아이디 중복 체크
$("#id").focusout(function () {
  $("#idCheckDiv").empty();
  $("#idCheckDiv").css("color", "red");
  if ($("#id").val() == "") {
    $("#idCheckDiv").text("먼저 아이디를 입력해주세요.");
    $("#id").focus();
  }
  // } else {
  //   $.ajax({
  //     type: "post",
  //     url: "",
  //     data: "id=" + $("#id").val(), //서버로 보내는 데이터
  //     dataType: "text", //서버로 받는 데이터형 ex) text,json,xml
  //     success: function (data) {
  //       //중복된 아이디 있으면 exist, 중복된 아이디 없으면 non_exist
  //       if (data == "exist") {
  //         $("#idCheckDiv").text("사용 불가능");
  //         $("#idCheckDiv").css("color", "red");
  //       } else if (data == "non_exist") {
  //         $("#idCheckDiv").text("사용 가능");
  //         $("#idCheckDiv").css("color", "blue");
  //       }
  //     },
  //     error: function (err) {
  //       console.log(err);
  //     },
  //   });
  // }
});

//비밀번호 확인
$("#pwd1").focusout(function () {
  $("#pwd1CheckDiv").empty();
  if ($("#pwd1").val() == "") {
    $("#pwd1CheckDiv").text("먼저 비밀번호를 입력해주세요.");
    $("#pwd1").focus();
  }
});

$("#pwd2").focusout(function () {
  $("#pwd2CheckDiv").empty();
  if ($("#pwd2").val() == "") {
    $("#pwd2CheckDiv").text("먼저 비밀번호를 입력해주세요.");
    $("#pwd2CheckDiv").css("color", "red");
    $("#pwd2").focus();
  } else {
    if ($("#pwd1").val() != $("#pwd2").val()) {
      $("#pwd2CheckDiv").text("비밀번호가 일치하지 않습니다.");
      $("#pwd2CheckDiv").css("color", "red");
      $("#pwd2").focus();
    }
    if ($("#pwd1").val() == $("#pwd2").val()) {
      $("#pwd2CheckDiv").text("일치");
      $("#pwd2CheckDiv").css("color", "blue");
    }
  }
});

//이메일 인증api 즐겨찾기에 넣어 둠
