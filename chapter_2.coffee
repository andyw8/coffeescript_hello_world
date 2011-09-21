# messing around with examples from Pragmatic Coffeescript

hi = (a, b) -> "Hello, #{a} and #{b}"
console.log hi('John', 'Jim')

cube = (num) => Math.pow num, 3
console.log "3 cubed is " + cube(3)

odd = (num) => num %2 is 1
console.log "3 is odd? " + odd(3)
console.log "4 is odd? " + odd(4)
console.log "3 string is odd? " + odd('3')

odd_strict = (num) ->
  unless typeof num is 'number'
    throw "#{num} is not a number"
  unless num is Math.round num
    throw "#{num} is not an integer"
  unless num > 0
    throw "#{num} is not positive" num % 2 is 1
    
# note that exceptions are silent unless explicitly caught
# and it seems not catching them will cause subequent lines to be run (make sense really, since we are in a global function)

try
  console.log "odd strict 4.5 " + odd_strict(4.5)
catch e
  console.log e

# important: A variable lives in the outermost scope in which an assignment has been made to that variable.

count = 0
incrementCount = -> count++
incrementCount()
console.log "count is now #{count}"