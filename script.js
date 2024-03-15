$(function () {
  let todoContainer = $("#todoContainer");

  if (localStorage.getItem("todos")) {
    todoContainer.html(localStorage.getItem("todos"));

    todoContainer.find(".btn-danger").on("click", function () {
      $(this).parent().parent().remove();
      saveToLocalStorage();
    });

    todoContainer.find(".btn-success").on("click", function () {
      $(this).parent().parent().toggleClass("text-decoration-line-through");
      saveToLocalStorage();
    });
  }

  $("#submit").on("click", addText);
  $("#clear").on("click", function () {
    todoContainer.empty();
  });
});

function addText(event) {
  let todoContainer = $("#todoContainer");
  event.preventDefault();
  let todo = $("#todo").val();
  console.log(todo);
  let deleteBtn = $("<button>X</button>").addClass("btn btn-danger mx-1");
  let doneBtn = $("<button>done</button>").addClass("btn btn-success");
  let btnContainer= $("<div></div>").append(deleteBtn).append(doneBtn);
  let li = $("<li></li>")
    .addClass("border py-2 px-3 d-flex justify-content-between align-items-center")
    .text(todo)
    .append(btnContainer)
  if (todo != "") {
    todoContainer.append(li);
  }
  saveToLocalStorage();
  deleteBtn.on("click", function () {
    $(this).parent().parent().remove();
    saveToLocalStorage();
  });
  doneBtn.on("click", function () {
    $(this).parent().parent().toggleClass("text-decoration-line-through");
    saveToLocalStorage();
  });
  $("#todo").val("");
}

function saveToLocalStorage() {
  let todosHtml = $("#todoContainer").html();
  localStorage.setItem("todos", todosHtml);
}
