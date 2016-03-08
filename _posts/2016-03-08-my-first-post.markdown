---
layout: post
title:  "My First Post"
date:   2016-03-08 02:15:33 -0500
categories: programming
---

For my first post, I decided to share my first experience with programming. After sifting through several languages, I finally decided to start learning Java. My first useful program I decided to make was a wage calculator. It took two arguments, your wage and how many hours worked. Because I wanted to make it as user-friendly as I could, the arguments were entered in by the user during runtime. I did this using the `Scanner` class in the Java Standard Library.

{% highlight java %}
Scanner input = new Scanner(System.in);

int wage = input.nextInt();
int hours = input.nextInt();
{% endhighlight %}

Then, as you may have guessed, I simply returned the two numbers multiplied together as one variable. But it did not stop there. My next step was to take overtime pay into account. Where I live once you start working >40 hours a week, your wage is increased by 50% for every hour over 40. I had to implement this by adding a conditional statement for hours above 40 and multiplying that by wage plus 50%.

 Here is an example: Suppose the user worked 45 hours at $8.00/hr:

{% highlight java %}

int wage = 8;
int hours = 45;
int moneyEarned = 0;

if (hours > 40){
	int overtimeHours = hours-40;
	moneyEarned += overtimeHours * ((wage / 2) + wage);
	moneyEarned += 40 * wage;
} else {
	moneyEarned = hours * wage;
}
{% endhighlight %}

This of course will output $320 for the regular hours plus $60 for overtime, giving a grand total of $380 earned for the week.

Documentation for the Scanner class can be found [here][java-scanner]

[java-scanner]: https://docs.oracle.com/javase/7/docs/api/java/util/Scanner.html