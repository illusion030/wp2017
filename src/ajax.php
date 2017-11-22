<?php
  $randnum = rand(1,3);
  $data = $_POST['data'];
  sleep(2);
  if ($randnum == 1) {
    echo "<h2> $data 在別人眼中既明事理,又謹慎小心,腳踏實地. ";
  } else if ($randnum == 2) {
    echo "<h2>身邊的人都覺得 $data 清新活潑,有魅力又有趣,腳踏實地也總是開開心心的. ";
  } else {
    echo "<h2>朋友們眼中的 $data 執傲且形式縝密,相當穩重且極度謹慎,是個即便已輸在起跑點也會努力不懈的人. ";
  }
  $randnum = rand(1,3);
  if ($randnum == 1) {
    echo "此外, $data 聰明且才華洋溢,卻又相當謙虛. ";
  } else if ($randnum == 2) {
    echo "此外, $data 不管到哪裡都十分受人注目,但也懂得適當地把握焦點所在,故不至於顯得傲慢. ";
  } else {
    echo "此外,朋友們要是看到 $data 衝動行事的模樣應該會受到很大的驚嚇. ";
  }
  $randnum = rand(1,3);
  if ($randnum == 1) {
    echo " $data 交朋友時並不操之過急或貿然接近,而是對交往過的朋友都以真心相對,也期待著對方能依樣以誠相待. ";
  } else if ($randnum == 2) {
    echo "人們認為 $data 親切熱情,善解人意,沒人不知道 $data 是個能活絡死氣沉沉的氣氛,又樂於助人的人呢. ";
  } else {
    echo " $data 做任何事都很仔細,並從不同角度來審視. ";
  }
  $randnum = rand(1,3);
  if ($randnum == 1) {
    echo "只要了解真實的 $data ,就會知道很難去動搖你對朋友的信賴,但一旦這份信賴崩解了,也相對地需要非常長的時間去克服.</h2>";
  } else if ($randnum == 2) {
    echo " $data 常被認為是個拒人於千里之外的人,但朋友們都懂, $data 會這樣都是個性使然啊.</h2>";
  } else {  
    echo " $data是個很照顧朋友的人,不會隨隨便便拋棄自己的朋友,只有在被朋友背叛時,才會有所動搖.</h2>";
  }
?>
