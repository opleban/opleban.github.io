---
layout: inline-block
title:  "Technical Week 2: Inline Blocks"
date:   2014-07-01 18:21:00
categories: cultural
---

##Technical Blog: Inline vs. Inline-block style
An inline object, as the name suggests, is an object that is displayed inline. Unlike block objects, inline objects don't take a width or height value and don't force a line break after the object.

<div class="diagram"> 
	<div class="inline">Inline object #1</div> 
	<div class="inline">Inline object #2</div> 
	<div class="inline">Inline object #3</div>
</div>
<div class="caption"> Three inline objects</div>

<div class="diagram">
	<div class="block">Block object #1</div> 
	<div class="block">Block object #2</div> 
	<div class="block">Block object #3</div>
</div>
<div class="caption">Three block objects</div>

As demonstrated above the three inline objects are adjacent to one another. Although, you can add a border and margin to an inline object, these objects only affect objects that are on the same horizontal plane. Examples of elements that are inline by default, include em, span, strong, and bold. Example of default block elements are p, div, ul and ol.

<div class="diagram">
	<div class="inline-block">Inline-block object #1</div>
	<div class="inline-block">Inline-block object #2</div>
	<div class="inline-block">Inline-block object #3</div>
</div>
<div class="caption">Three similar inline-block objects</div>

<div class="diagram">
	<div class="inline_high">Inline-block object #1</div>
	<div class="inline_fat">Inline-block object #2</div>
	<div class="inline_low">Inline-block object #3</div>
</div>
<div class="caption">Three inline-block objects with different shapes</div>

Objects that are inline-block can be placed so several irregularly sized objects are adjacent to each other. Very similar to inline objects, however those objects can take on width and heights values unlike purely inline objects. Hence, inline-blocks combine many of the attributes of inline and block objects. Like inline objects, an inline-block object appears inline and doesn't force a line break in its wake, so that one inline-block object can appear adjacent to another. However, like block objects, an inline-block object accepts a width and a height and will have an effect on all objects it may come in contact with, not just those adjacent to it.

