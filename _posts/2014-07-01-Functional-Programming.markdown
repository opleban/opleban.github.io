---
layout: post
title:  "Technical Week 6: Functional Programming in Ruby -a short introduction"
date:   2014-07-01 19:39:00
categories: technical
---

Object-Oriented Programming (OOP), as you would expect from the name, is based around designing and managing the interaction of objects. These "objects" are data types which contain various properties (state) and attributes (behaviors). OOP is a way of modeling programs based on concepts that are intuitive and easily comprehensible for since it reflects our interactions in the non-virtual world.

Looking at the programming landscape more broadly, OOP is generally heralded as an example of an imperative approach to programming. The imperative approach provides a set of instructions to be followed, a recipe of sorts to produce the desired outcome. In OOP these instructions are uusally done vis-a-vis classes, instances, and other object types which call and are called by methods.

###Functional Programming i.e. Passive Aggresive Programming

Whereas, OOP relies on the interaction between objects and changes to the internal states of objects and the environment external to a function, functional programming emphasizes the use of functions whose results are largely self-contained and rely entirely on their inputs. Instance variables, class variables, constants, global variables, none of these things exist in purely functional programming. The only variables that are accessible are local variables, and even variable assignments are largely eschewed. Since functions rely entirely on their inputs, their outcomes are self-contained and hence don't generally cause any "side effects" on the external programming environment. OOP relies heavily on these side effects. In OOP, methods modify not only their inputs but also their external environment through their effects on variables external to the specific method call.

Functional programming, a subset of the declarative approach (contrast to imperative) is based around writing code that describe the problem meant to be solved providing a framework for solving them.

###First Class Functions

In most OOP languages, objects constitute first-class citizens, in that they can be passed into and returned from methods, and hence, constitute first-class citizens or values. On a side-note, I find the linguistic decision to analogize programming elements and attributes to a very political concept -citizenship -to be extremely fascinating.  I also find the analogy to be exceedingly apt. As would be expected in a programming paradigm where the focus is on functions and descriptions One feature often tied to functional programming is the concept of first-class functions. In this case, functions being fist-class citizen, just as variables, means that they can be utilized in the all the ways that a variable would. In particular, this means that functions can be called as arguments in other functions and also be returned from a function as well. Whereas this concept is prominently tied to functional programming, these concepts are found in both JavaScript (prototype-based language) and Ruby (an ostensibly OOP language).

This example demonstrates the use of functions as higher-order values in Ruby:
<% highlight ruby %>
def test
  "Hello from test"
end

def test_vehicle(func)
  return func
end

test_vehicle(test)
=> "Hello from test"
<% endhighlight %>

As the example shows, above, I was able to pass the method "test" as an argument into another function "test_vehicle" and return it.  While, in Ruby, there aren't first-class functions. You aren't able to define a method within a method, as you would be able to do in JavaScript. However, Ruby features procs, lambdas, and blocks which provide most the remaining functionality of first-class functions..

###Iteration through Recursion

Whereas the imperative programming often rely on while- and for-loops for iteration and repeated operations, functional language with its eschewal of variable assignments and side-effects, often utilize recursions to meet these same ends.</p>

This figure shows a simple countdown function written in imperative form:

<% highlight ruby %>
def countdown (n)
  x = n
  while x >= 0
    puts x
    x -= 1
  end
end

# Output 
10
9
8
7
6
5
4
3
2
1
0
=> nil
<% endhighlight %>

This figures shows a different method with the same output written in a recursive, more functional form:

<% ruby highlight %>
def recursive_countdown(n)
  puts n
  recursive_countdown (n-1) if n > 0
end
<% endhighlight %>

As briefly mentioned before, procs, lambdas, and blocks are also programming concepts often tied to functional programming and all of which are available in Ruby. However, I will delay speaking any further on those concepts until I have a firmer grasp on them.