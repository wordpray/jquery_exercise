var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  var list = $("#list");

  function appendList(word){
    var item = $('<li class = "list">').append(word);
    list.append(item);
  }

  $("#submit").on("click",function(){
    var input = $("#keyword").val();
    var reg = new RegExp("^" + input);

    // 2回目以降検索時に一度削除してまた追加している
    $(".list").remove();

    $.each(fruits,function(i,fruit){
      if (fruit.match(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0){
      appendList("一致するものがありませんでした")
    }
  });
});