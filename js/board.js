$(".apply").click(function () {
  var projectName = $("#projectName").text();
  var field = $(this).prev().prev().text();
  var text = '프로젝트 "' + projectName + '" ' + field + " 지원하시겠습니까?";
  $(".loginModal").parent().attr("class", "modalWrapOpen");
  $(".div_center_tit").text(text);
});
$("#apply").click(function () {
  alert("지원 완료");
  $(".loginModal").parent().attr("class", "modalWrapClose");
});
$(".applyCancel, .closeBtn").click(function () {
  $(".loginModal").parent().attr("class", "modalWrapClose");
});
