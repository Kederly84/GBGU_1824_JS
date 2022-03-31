// Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a;
alert(c); //2 В данном случае ответ 2 т.к. JS при префиксной записи сначал выполняет инкрементацию переменной, а затем возвращает значение.
d = b++;
alert(d); //1 При постфиксной записи сначала идет возврат значения, затем инкрементация.
c = (2+ ++a);
alert(c); //5 Ответ 5 т.к. было 2 префиксных инкрементации, т.е. а = 3 и прибавили 2 поэтому ответ 5
d = (2+ b++);
alert(d); //4 Здесь же была выполнена только одна инкрементация b поэтому ответ 4
alert(a); //3 Тут выполнены уже все инкрементации переменных поэтому ответы 3
alert(b); //3 Тут выполнены уже все инкрементации переменных поэтому ответы 3