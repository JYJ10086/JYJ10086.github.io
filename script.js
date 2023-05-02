function sayHello(){
var response=prompt("您的名字");
alert("您好, " + response + "！ 祝您天天开心！");
}
sayHello()



function coreCount()
{
	var cores=0;
	var questions=document.getElementsByClassName("question")
	for(var i=0;i<questions.length;i++)
	{
		var count=0;
		var a=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					a=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(a==1)
			cores+=count;
	}

	alert("您的综合值是"+cores);
}
