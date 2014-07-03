---
layout: post
title:  "Technical Week 4: Looping with Ruby"
date:   2014-07-01 19:14:00
categories: technical
---

##Looping with Ruby

Not unexpectedly, Ruby provides numerous control flow commands for looping. I'll discuss the various options available and when you should use them.

###loop...end
Loop is a simple command that will create an infinite loop. As such, when using loop you'll want to include a "break-if" statement that stops the loop when a certain condition is met.

{% highlight ruby %}
x = 0
loop do 
  puts x 
  x += 1 
  break if x = 5
end

... 
0
1
2
3
4
5 
{% endhighlight %}

As you can see from the example code above. The loop repeats until the break condition, x = 5, is met. Without the break condition, this would be an infinite loop. Loop is simple to use, but in general there doesn't are not any situations where loop..end is preferable to the other options provided by loop, particularly since Ruby also features "while" loops and "until" loops. "Loop do..end" may be preferable in cases where you'd want to implement an infinite loop.

###while..end

A "while" loops will execute a block of code while a condition evaluates as true. The "while" condition is evaluated each time the code block is executed at the beginning loop.

{% highlight ruby %}				
x = 0
while x >= 5
  puts x
  x += 1
end

...
0
1
2
3
4
5 
{% endhighlight %}

The code above achieves the same end as the previous "loop..end" example. A "while" loop can do everything "loop do..end" canod and more. Moreover, "while" loop is more readable than "loop do..end" because the condition under which the code block is executed is more clearly stated at the top of the loop. If you wanted to break the "while" loop even though the "while" condition still evaluates to true, a break statement can also be added within the code block just as with "loop do..end" which will break out of the loop early. Still, you better be careful to choose a condition that will eventually evaluate as false so that an infinite loop is not created (unless that's what you want). "While" loops are useful when you want to execute a code block an indeterminate number of times until a certain condition is met. If you would like your code block to execute a set number of times, you should perhaps consider using one of Ruby's iterator methods such as "<a href="http://www.ruby-doc.org/core-1.9.3/Integer.html#method-i-times">times</a>", "<a href="http://www.ruby-doc.org/core-1.9.3/Integer.html#method-i-upto">upto</a>","<a href="http://www.ruby-doc.org/core-1.9.3/Integer.html#method-i-downto">downto</a>", or "<a href="http://www.ruby-doc.org/core-2.1.2/Range.html#method-i-step">step</a>".

###until..end

"Until..end" is the opposite of a "while" loop. As you would expect from its name, "until" will loop through code block until a certain condition evalutes as true. It is equivalent to using a "while" loop with a negated conditioned (!condition).

{% highlight ruby %}
x= 0
until x == 5
  puts x
  x += 1
end

...
0
1
2
3
4 
{% endhighlight %}

Nothing unexpected here. Personally, I default to using a "while" loop.  It may make your code more readable to express the loop condition using "until" and a positive condition rather than "while" a negated condition.

Both  "while" and "until" loops can be used as single line modifier statement. This can be useful when you want to concisely call a method or single-line command repeatedly under certain conditions.

{% highlight ruby %}
def importantMethod(num)
  puts "Hello"
  num += 1	
end

x=0
x = importantMethod(x) while x<5

...
Hello
Hello
Hello
Hello 
{% endhighlight %}

I will mention briefly that while Ruby also features a "for" loop which allows you to loop through each item in a collection, in almost all cases its better to use one of Ruby's numerous iterator methods. Most prominently: "<a href="http://www.ruby-doc.org/core-2.1.2/Array.html#method-i-each">each</a>, "<a href="http://www.ruby-doc.org/core-2.1.2/Array.html#method-i-map">map</a>", and "<a href="http://www.ruby-doc.org/core-2.1.2/Array.html#method-i-select">select"</a>. 