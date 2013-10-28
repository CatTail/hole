# Platform cattail@cattop.cattail.me Linux3.11.6-1-ARCH@x86_64 GNU/Linux
# Date 2013-10-28 11:52:45
# @author zhongchiyu@gmail.com (cattail)
# @description In javascript, keyword `in` will search for whether key in 
# object (including array) . Though , in coffeescript, `in` search for whether
# item in array.
# As a matter of, keyword `of` in coffeescript equals to `in` in javascript!
 
########################################
# Problem
########################################

# test whether browser support touch event
if 'ontouchstart' in window
  # do stuff

########################################
# Solution
########################################
 
# using keyword `of` instead
if 'ontouchstart' of window

########################################
# Reference
########################################

# [simplest-way-to-check-if-key-exists-in-object-using-coffeescript](http://stackoverflow.com/questions/8242984/simplest-way-to-check-if-key-exists-in-object-using-coffeescript)
