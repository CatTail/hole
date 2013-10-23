# Platform cattail@cattop.cattail.me Linux3.11.5-1-ARCH@x86_64 GNU/Linux
# Date 2013-10-23 15:39:42
# @author zhongchiyu@gmail.com (cattail)
# @description In CoffeeScript class, there has a way of refer to class 
# constructor in class definition body, but there is no such way of referring
# constructor in static or instance method.

########################################
# Problem
########################################

# Following class have a very long class name, but we want to refer to 
# constructor in many places.
class $veryveryverylonglonglongClassName
  # factory method
  @create: ->
    new $veryveryverylonglonglongClassName

  getConstructor: ->
    $veryveryverylonglonglongClassName

########################################
# Solution
########################################
    
# Using following strategy to refer to constructor in static or instance 
# method.
class first.second.third.longlonglongClassName
  Ctor = @
 
  @create: ->
    new Ctor

  getConstructor: ->
    Ctor
